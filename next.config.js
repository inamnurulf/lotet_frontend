/** @type {import('next').NextConfig} */
const nextConfig = {
  images:{
    remotePatterns:[
      {
        hostname: 'd34u8crftukxnk.cloudfront.net'
      }
    ]
  }
}

module.exports = nextConfig
