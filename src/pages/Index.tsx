import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

const Index = () => {
  useEffect(() => {
    const sendDiscordWebhook = async () => {
      try {
        const visitorInfo = {
          timestamp: new Date().toISOString(),
          userAgent: navigator.userAgent,
          timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
          language: navigator.language,
          screenResolution: `${screen.width}x${screen.height}`,
          viewport: `${window.innerWidth}x${window.innerHeight}`,
          referrer: document.referrer || "Direct visit",
          url: window.location.href,
        };

        const webhookData = {
          embeds: [{
            title: "🌐 New Page Visit",
            color: 3066993, // Green color
            fields: [
              {
                name: "⏰ Timestamp",
                value: visitorInfo.timestamp,
                inline: true
              },
              {
                name: "🌍 Timezone",
                value: visitorInfo.timezone,
                inline: true
              },
              {
                name: "🗣️ Language",
                value: visitorInfo.language,
                inline: true
              },
              {
                name: "📱 Screen Resolution",
                value: visitorInfo.screenResolution,
                inline: true
              },
              {
                name: "🖥️ Viewport",
                value: visitorInfo.viewport,
                inline: true
              },
              {
                name: "🔗 Referrer",
                value: visitorInfo.referrer,
                inline: false
              },
              {
                name: "🖥️ User Agent",
                value: visitorInfo.userAgent,
                inline: false
              }
            ],
            timestamp: visitorInfo.timestamp
          }]
        };

        await fetch("https://discord.com/api/webhooks/1399715191708581948/YexNPKFHqaXOTFzxwLV9rI3YlPQ11L8msgtFid4kepwcnqnqEMsz7qsmeHeA3QULF5jp", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(webhookData),
        });
      } catch (error) {
        console.error("Failed to send Discord webhook:", error);
      }
    };

    sendDiscordWebhook();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <div id="about">
        <About />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default Index;
