// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "example.com", // আপনার এরর মেসেজে যে ডোমেইনটি আছে
//         port: "",
//         pathname: "/**",
//       },
//       {
//         protocol: "https",
//         hostname: "images.unsplash.com", // যদি আনস্প্ল্যাশ ইমেজ ব্যবহার করেন
//       },
//       {
//         protocol: "https",
//         hostname: "i.ibb.co", // যদি imgbb ব্যবহার করেন
//       },
//     ],
//   },
// };

// export default nextConfig;

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "images.unsplash.com",
//       },
//       // যদি অন্য কোনো সোর্স থাকে সেটিও এখানে যোগ করুন
//     ],
//   },
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "example.com", // আপনার কার্ডে যে ডোমেইন থেকে ইমেজ আসছে
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com", // আনস্প্ল্যাশ ইমেজের জন্য
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
