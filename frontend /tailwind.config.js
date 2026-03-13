export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#0f1724",
        foreground: "#f8fafc",
        card: "#0b1220",
        "card-foreground": "#f8fafc",
        primary: "#06b6d4",
        "primary-foreground": "#0b1220",
        secondary: "#111827",
        "secondary-foreground": "#f8fafc",
        muted: "#374151",
        "muted-foreground": "#9ca3af",
        border: "#1f2937",
        input: "#0b1220",
        ring: "#06b6d4",
        destructive: "#ef4444"
      },
      borderRadius: { DEFAULT: "0.5rem" },
      fontFamily: { sans: ["Inter", "ui-sans-serif", "system-ui"] }
    }
  },
  plugins: []
};
