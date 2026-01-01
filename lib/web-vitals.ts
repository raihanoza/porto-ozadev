export function reportWebVitals(metric: any) {
  // Console logging for development
  if (process.env.NODE_ENV === "development") {
    console.log(metric);
  }

  // Send to analytics in production
  if (process.env.NODE_ENV === "production") {
    // Google Analytics 4 example
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", metric.name, {
        event_category: "Web Vitals",
        event_label: metric.id,
        value: Math.round(
          metric.name === "CLS" ? metric.value * 1000 : metric.value
        ),
        non_interaction: true,
      });
    }

    // You can also send to other analytics services
    // Example: send to Vercel Analytics, PostHog, etc.

    switch (metric.name) {
      case "FCP":
        console.log("First Contentful Paint:", metric.value);
        break;
      case "LCP":
        console.log("Largest Contentful Paint:", metric.value);
        break;
      case "FID":
        console.log("First Input Delay:", metric.value);
        break;
      case "CLS":
        console.log("Cumulative Layout Shift:", metric.value);
        break;
      case "TTFB":
        console.log("Time to First Byte:", metric.value);
        break;
    }
  }
}
