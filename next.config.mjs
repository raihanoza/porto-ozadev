/** @type {import('next').NextConfig} */
const nextConfig = {
  // Performance optimizations
  compress: true,

  // Server external packages (moved from experimental)
  serverExternalPackages: [],

  // Image optimization
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatar.vercel.sh",
        port: "",
        pathname: "/**",
      },
    ],
  },

  // Headers for performance and security
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
      {
        source: "/image/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source:
          "/(favicon|icon-:size*|apple-touch-icon|android-chrome-:size*)\\.(ico|png|svg)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/cv.pdf",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=3600",
          },
        ],
      },
    ];
  },

  // Build configuration
  typescript: {
    ignoreBuildErrors: false,
  },

  // Bundle analyzer (optional, remove in production)
  // bundlePagesRouterDependencies: true,

  // Output configuration
  output: "standalone",

  // Redirects for SEO
  async redirects() {
    return [
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },
      {
        source: "/portfolio",
        destination: "/#projects",
        permanent: true,
      },
      {
        source: "/cv",
        destination: "/resume",
        permanent: true,
      },
    ];
  },

  // PoweredByHeader
  poweredByHeader: false,

  // Compiler options
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
};

export default nextConfig;
