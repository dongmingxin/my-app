/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    // see https://styled-components.com/docs/tooling#babel-plugin for more info on the options.
    styledComponents: true
  },
  images: {
    domains: ['marg-marg.s3.ap-southeast-2.amazonaws.com'],
  },
}

module.exports = nextConfig
