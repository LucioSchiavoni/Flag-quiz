/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    backendURL: "https://restcountries.com/v3.1/all"
  }

  
}

module.exports = nextConfig;