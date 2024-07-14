import withVideos from 'next-videos';

/** @type {import('next').NextConfig} */
const nextConfig = {};

// Combine the Next.js config with the withVideos function
const finalConfig = withVideos(nextConfig);

export { finalConfig as nextConfig };