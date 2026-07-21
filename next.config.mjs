/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    // Optimization is ON: Next emits a responsive srcset in AVIF/WebP, which
    // downscales the oversized logo, founder photo and certificate scans
    // instead of shipping the full-resolution originals to every visitor.
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'hebbkx1anhila5yf.public.blob.vercel-storage.com',
      },
    ],
  },
}

export default nextConfig
