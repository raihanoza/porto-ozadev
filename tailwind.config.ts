/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from "tailwindcss";
const svgToDataUri = require("mini-svg-data-uri");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "gradient-pan": {
          "0%": { backgroundPosition: "0% 0%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 100%" },
        },
        "gradient-pan-y": {
          "0%": { backgroundPosition: "50% 0%" },
          "100%": { backgroundPosition: "50% 100%" },
        },
        "hue-rotate": {
          "0%": { filter: "hue-rotate(0deg)" },
          "100%": { filter: "hue-rotate(360deg)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },
        "marquee-vertical": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(calc(-100% - var(--gap)))" },
        },
        border: {
          to: {
            "--border-angle": "360deg",
          },
        },
        "border-beam": {
          "100%": {
            "offset-distance": "100%",
          },
        },
      },
      colors: {
        purple: "#11071F",
        navDark: "rgba(31, 61, 92, 0.5)",
        navLight: "rgba(238, 239, 246, 0.5)",
        navBg: "rgba(31, 61, 92, 0.5)",
        lightpurple: "#7B91D1",
        softpurple: "#7B91D1",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      animation: {
        border: "border 4s linear infinite",
        "border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
        marquee: "marquee var(--duration) linear infinite",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
        "gradient-fast": "gradient-pan 8s ease-in-out infinite alternate",
        gradient: "gradient-pan 14s ease-in-out infinite alternate",
        "gradient-slow": "gradient-pan 24s ease-in-out infinite alternate",
        // Kombinasi pan + hue (opsional, untuk layer khusus gradient)
        "gradient-hue":
          "gradient-pan 22s ease-in-out infinite alternate, hue-rotate 60s linear infinite",
        // Hue saja (opsional)
        hue: "hue-rotate 50s linear infinite",
        "gradient-vert": "gradient-pan-y 18s ease-in-out infinite alternate",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundImage: {
        // 135deg, stops ekstra untuk kurangi banding
        ocean:
          "linear-gradient(135deg, #0ea5e9 0%, #12a2ea 8%, #19a0ea 12%, #2aa8f2 20%, #30a2f2 28%, #3b82f6 40%, #366ff0 50%, #2b63e0 60%, #234ec8 72%, #1e40af 85%, #1c3a9e 100%)",
        sky: "linear-gradient(135deg, #e0f2fe 0%, #d4ecfe 12%, #cdeafe 18%, #a7d3fd 30%, #93c5fd 40%, #78b3fb 52%, #60a5fa 65%, #4b92f7 78%, #3b82f6 88%, #2563eb 100%)",
        "deep-blue":
          "linear-gradient(135deg, #071a3c 0%, #0b2559 16%, #0e2b66 24%, #10316b 32%, #133a73 45%, #153e75 55%, #1b4280 68%, #1e3a8a 82%, #1e40af 100%)",
        "indigo-night":
          "linear-gradient(135deg, #1e1b4b 0%, #232060 12%, #2a237b 24%, #3730a3 40%, #3f36b8 52%, #4338ca 64%, #4b42de 78%, #4f46e5 88%, #312e81 100%)",
        "indigo-light":
          "linear-gradient(135deg, #1e1b4b 0%, #232060 12%, #2a237b 24%, #3730a3 40%, #3f36b8 52%, #4338ca 64%, #4b42de 78%, #4f46e5 88%, #312e81 100%)",
        "blue-lagoon":
          "linear-gradient(135deg, #06b6d4 0%, #08b0d2 6%, #0ea5e9 14%, #22d3ee 28%, #3b82f6 48%, #2a6df0 62%, #1d4ed8 78%, #1e40af 100%)",
        "arctic-ice":
          "linear-gradient(135deg, #f0f9ff 0%, #eaf7ff 10%, #e0f2fe 22%, #d1ecff 34%, #bae6fd 48%, #9ddcfb 62%, #7dd3fc 78%, #38bdf8 100%)",
        "azure-mist":
          "linear-gradient(135deg, #ecfeff 0%, #d8fbff 12%, #a5f3fc 26%, #67e8f9 40%, #22d3ee 58%, #60a5fa 76%, #2563eb 100%)",
        "cobalt-radiance":
          "linear-gradient(135deg, #0b1e6d 0%, #1e3a8a 18%, #1d4ed8 38%, #2563eb 54%, #3b82f6 72%, #60a5fa 88%, #93c5fd 100%)",
        "midnight-starry":
          "linear-gradient(135deg, #020617 0%, #071126 12%, #0b1020 24%, #0f172a 40%, #172554 60%, #1e3a8a 82%, #312e81 100%)",
        "neon-azure":
          "linear-gradient(135deg, #00f5ff 0%, #00e2ff 14%, #00d4ff 26%, #00aaff 45%, #0081ff 62%, #3b82f6 82%, #1e40af 100%)",
        "sapphire-glow":
          "linear-gradient(135deg, #0c4a6e 0%, #075985 20%, #0ea5e9 40%, #2563eb 64%, #1d4ed8 82%, #1e40af 100%)",
        "steel-blue":
          "linear-gradient(135deg, #0f172a 0%, #172036 16%, #1e293b 30%, #23324a 46%, #334155 62%, #1e3a8a 82%, #1e40af 100%)",
        "risd-alt-smooth": `linear-gradient(135deg,
          #4d50f9 0%,
          color-mix(in oklab, #4d50f9 55%, #575afa) 10%,
          #575afa 22%,
          color-mix(in oklab, #575afa 55%, #6163fa) 34%,
          #6163fa 48%,
          color-mix(in oklab, #6163fa 50%, #888afb) 64%,
          #888afb 80%,
          color-mix(in oklab, #888afb 45%, #b0b1fd) 90%,
          #b0b1fd 100%
        )`,
        // Kompatibel maksimum (tanpa color-mix, stop berdekatan)
        "risd-alt-smooth-compat": `linear-gradient(135deg,
          #A1CCF7 0%,
          #B4D6F8 8%,
          #BBDAF9 20%,
          #C1DDFA 32%,
          #C7E0FA 44%,
          #CCE3FA 60%,
          #D1E6FA 74%,
          #D5E8FA 88%,
          #D9EAFA 100%
        )`,
        "dark-risd-alt-smooth-compat": `linear-gradient(135deg,
        #2C2D63 0%,
        #2C2D63 8%,
        #2C2D63 20%,
        #333471 32%,
        #333471 44%,
        #333471 60%,
        #3C3D84 74%,
        #3C3D84 88%,
        #3C3D84 100%
       )`,
        /* =========================
           Set 2 — Oxford/Penn/Federal (01002c → 05054a)
           ========================= */
        // Ultra-smooth (color-mix antar warna bertetangga)
        "navy-stack-smooth": `linear-gradient(135deg,
          #01002c 0%,
          color-mix(in oklab, #01002c 55%, #020234) 12%,
          #020234 22%,
          color-mix(in oklab, #020234 55%, #03033b) 32%,
          #03033b 44%,
          color-mix(in oklab, #03033b 55%, #040443) 56%,
          #040443 70%,
          color-mix(in oklab, #040443 55%, #050547) 84%,
          #050547 92%,
          color-mix(in oklab, #050547 60%, #05054a) 96%,
          #05054a 100%
        )`,
        // Kompatibel maksimum (tanpa color-mix, stop berdekatan)
        "navy-stack-smooth-compat": `linear-gradient(135deg,
          #01002c 0%,
          #020233 10%,
          #020234 18%,
          #03033b 36%,
          #040443 54%,
          #050547 80%,
          #020064 90%,
          #191772 100%
        )`,

        "federal-smooth": `
          linear-gradient(135deg,
            var(--federal-blue, #03045e) 0%,
            color-mix(in oklab, var(--federal-blue, #03045e), var(--federal-blue-2, #080968) 55%) 10%,
            var(--federal-blue-2, #080968) 22%,
            color-mix(in oklab, var(--federal-blue-2, #080968), var(--federal-blue-3, #0d0e72) 55%) 34%,
            var(--federal-blue-3, #0d0e72) 50%,
            color-mix(in oklab, var(--federal-blue-3, #0d0e72), var(--phthalo-blue, #161785) 55%) 66%,
            var(--phthalo-blue, #161785) 82%,
            color-mix(in oklab, var(--phthalo-blue, #161785), white 8%) 100%
          )
        `,
        "navy-stack-continue": `linear-gradient(135deg,
          #191772 0%,
          color-mix(in oklab, #191772 70%, #1f1d7c 30%) 8%,
          #1f1d7c 16%,
          color-mix(in oklab, #1f1d7c 60%, #252384 40%) 24%,
          #252384 36%,
          color-mix(in oklab, #252384 55%, #2c2a8e 45%) 48%,
          #2c2a8e 60%,
          color-mix(in oklab, #2c2a8e 50%, #35339a 50%) 72%,
          #35339a 84%,
          color-mix(in oklab, #35339a 45%, #4040a7 55%) 92%,
          #4040a7 100%
        )`,
        // 2) Lanju
        "navy-stack-vert-compat": `linear-gradient(180deg,
      #01002c 0%,
      #020233 10%,
      #020234 18%,
      #03033b 36%,
      #040443 54%,
      #050547 80%,
      #020064 90%,
      #191772 100%
    )`,
        "navy-stack-vert-continue-compat": `linear-gradient(180deg,
      #191772 0%,
      #1a1975 6%,
      #1d1c7a 14%,
      #222181 24%,
      #2a2990 36%,
      #3333a0 50%,
      #4040ae 66%,
      #5151bd 80%,
      #6565cb 90%,
      #7a7ad8 100%
    )`,
        // TOP: #01002c → #191772
        "navy-stack-top": `linear-gradient(180deg,
#01002c 0%,
color-mix(in oklab, #01002c 85%, #191772 15%) 10%,
color-mix(in oklab, #01002c 70%, #191772 30%) 25%,
color-mix(in oklab, #01002c 55%, #191772 45%) 40%,
color-mix(in oklab, #01002c 40%, #191772 60%) 60%,
color-mix(in oklab, #01002c 20%, #191772 80%) 80%,
#191772 100%
)`,
        "lightblue-stack-top": `linear-gradient(180deg,
#6AAFF2 0%,
color-mix(in oklab, #6AAFF2 85%, #B4D5F9 15%) 10%,
color-mix(in oklab, #6AAFF2 70%, #B4D5F9 30%) 25%,
color-mix(in oklab, #6AAFF2 55%, #B4D5F9 45%) 40%,
color-mix(in oklab, #6AAFF2 40%, #B4D5F9 60%) 60%,
color-mix(in oklab, #6AAFF2 20%, #B4D5F9 80%) 80%,
#B4D5F9 100%
)`,

        // BOTTOM: #191772 → #7a7ad8 (lebih terang, tetap satu keluarga)
        "navy-stack-bottom": `linear-gradient(180deg,
  #191772 0%,
  color-mix(in oklab, #191772 80%, #5151CD 20%) 16%,
  color-mix(in oklab, #191772 65%, #5151CD 35%) 32%,
  color-mix(in oklab, #191772 50%, #5151CD 50%) 48%,
  color-mix(in oklab, #191772 35%, #5151CD 65%) 64%,
  color-mix(in oklab, #191772 20%, #5151CD 80%) 82%,
  #5151CD 100%
  )`,
        "lightblue-stack-bottom": `linear-gradient(180deg,
  #B4D5F9 0%,
  color-mix(in oklab, #B4D5F9 80%, #6AAFF2 20%) 16%,
  color-mix(in oklab, #B4D5F9 65%, #6AAFF2 35%) 32%,
  color-mix(in oklab, #B4D5F9 50%, #6AAFF2 50%) 48%,
  color-mix(in oklab, #B4D5F9 35%, #6AAFF2 65%) 64%,
  color-mix(in oklab, #B4D5F9 20%, #6AAFF2 80%) 82%,
  #6AAFF2 100%
)`,
        "navy-stack-back-smooth": `linear-gradient(180deg,
  #5151CD 0%,
  color-mix(in oklab, #5151CD 80%, #01002c 20%) 16%,
  color-mix(in oklab, #5151CD 65%, #01002c 35%) 32%,
  color-mix(in oklab, #5151CD 50%, #01002c 50%) 48%,
  color-mix(in oklab, #5151CD 35%, #01002c 65%) 64%,
  color-mix(in oklab, #5151CD 20%, #01002c 80%) 82%,
  #01002c 100%
)`,
        "lightblue-stack-back-smooth": `linear-gradient(180deg,
  #5151CD 0%,
  color-mix(in oklab, #5151CD 80%, #6AAFF2 20%) 16%,
  color-mix(in oklab, #5151CD 65%, #6AAFF2 35%) 32%,
  color-mix(in oklab, #5151CD 50%, #6AAFF2 50%) 48%,
  color-mix(in oklab, #5151CD 35%, #6AAFF2 65%) 64%,
  color-mix(in oklab, #5151CD 20%, #6AAFF2 80%) 82%,
  #6AAFF2 100%
)`,
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [
    addVariablesForColors,
    function ({ matchUtilities, theme }: any) {
      matchUtilities(
        {
          "bg-dot-thick": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="2.5"></circle></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      );
    },
    require("tailwindcss-animate"),
  ],
};

function addVariablesForColors({ addBase, theme }: any) {
  const allColors = flattenColorPalette(theme("colors"));
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
export default config;
