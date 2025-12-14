/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // WARNING: отключает фейл билда при ошибках TS
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig
