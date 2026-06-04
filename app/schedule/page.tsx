"use client";

import { useEffect } from "react";

export default function Schedule() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <main className="schedule-page">
      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/justkaury/30min?hide_event_type_details=1&hide_gdpr_banner=1&background_color=000000&text_color=ffffff&primary_color=c8b4e6"
        style={{ minWidth: "320px", height: "100%" }}
      />
    </main>
  );
}
