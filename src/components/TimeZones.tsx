import { useState, useEffect } from "react";
import { format } from "date-fns";
import { formatInTimeZone } from "date-fns-tz";

const TimeZones = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [visitorTimeZone, setVisitorTimeZone] = useState("UTC");

  // My time zone (Hong Kong)
  const myTimeZone = "Asia/Hong_Kong";

  useEffect(() => {
    // Get visitor's time zone
    const detectedTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    setVisitorTimeZone(detectedTimeZone);

    // Update time every second
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (timeZone: string) => {
    return formatInTimeZone(currentTime, timeZone, "HH:mm:ss");
  };

  const formatDate = (timeZone: string) => {
    return formatInTimeZone(currentTime, timeZone, "MMM dd, yyyy");
  };

  const getTimeZoneAbbr = (timeZone: string) => {
    try {
      return formatInTimeZone(currentTime, timeZone, "zzz");
    } catch {
      return timeZone.split('/').pop()?.replace('_', ' ') || timeZone;
    }
  };

  return (
    <div className="flex justify-between items-start w-full max-w-6xl mx-auto px-4 mb-8">
      {/* Visitor's Time Zone */}
      <div className="text-left animate-slide-up" style={{animationDelay: '0.8s'}}>
        <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-lg p-4 shadow-glow-cyan">
          <p className="text-xs text-muted-foreground mb-1">Visitor time</p>
          <p className="text-crypto-cyan font-mono text-lg font-bold">
            {formatTime(visitorTimeZone)}
          </p>
          <p className="text-xs text-muted-foreground">
            {formatDate(visitorTimeZone)}
          </p>
          <p className="text-xs text-crypto-cyan/70">
            {getTimeZoneAbbr(visitorTimeZone)}
          </p>
        </div>
      </div>

      {/* My Time Zone */}
      <div className="text-right animate-slide-up" style={{animationDelay: '1s'}}>
        <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-lg p-4 shadow-glow-primary">
          <p className="text-xs text-muted-foreground mb-1">My Time</p>
          <p className="text-primary font-mono text-lg font-bold">
            {formatTime(myTimeZone)}
          </p>
          <p className="text-xs text-muted-foreground">
            {formatDate(myTimeZone)}
          </p>
          <p className="text-xs text-primary/70">
            {getTimeZoneAbbr(myTimeZone)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TimeZones;