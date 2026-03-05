/** @type {import('next').NextConfig} */

const securityHeaders = [
  // Prevent clickjacking — nobody can embed this in an iframe
  { key: 'X-Frame-Options', value: 'DENY' },
  // Prevent MIME sniffing
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  // Limit referrer info sent to external sites
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  // Disable unused browser features
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
  // Force HTTPS for 1 year
  { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains' },
  // Content Security Policy
  // - No external scripts (site has none)
  // - Google Fonts via next/font (fonts served from gstatic)
  // - All images are local
  // - Facebook link is a regular <a>, not a frame/script
  {
    key: 'Content-Security-Policy',
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline'",         // Next.js hydration requires this
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com",
      "img-src 'self' data: blob:",                // all images are local
      "connect-src 'self'",                        // no external API calls
      "frame-ancestors 'none'",                    // belt-and-suspenders with X-Frame-Options
      "base-uri 'self'",
      "form-action 'self'",
    ].join('; '),
  },
]

const nextConfig = {
  // Don't expose the Next.js version in response headers
  poweredByHeader: false,
  // Catch common mistakes during development
  reactStrictMode: true,
  // Restrict Next.js Image Optimizer to local images only
  // (fixes CVE: DoS via remotePatterns misconfiguration)
  images: {
    remotePatterns: [], // no external image sources needed
  },
  headers: async () => [
    {
      source: '/(.*)',
      headers: securityHeaders,
    },
  ],
}

export default nextConfig
