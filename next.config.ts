import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	output: "export",
	reactStrictMode: true,
	images: {
		unoptimized: true,
	},
};

if (process.env.NODE_ENV !== "development") {
	nextConfig.basePath = "/portfolio";
}

export default nextConfig;
