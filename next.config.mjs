import createMDX from '@next/mdx'

// next.config.js
const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // important for GitHub Pages
  basePath: isProd ? '/MyWebsite' : '',
  assetPrefix: isProd ? '/MyWebsite/' : '',
  images: {
    unoptimized: true,
  },
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
}
 
const withMDX = createMDX({
  // Add markdown plugins here, as desired
    extension: /\.(md|mdx)$/,
})

export default withMDX(nextConfig)