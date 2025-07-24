import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

const nextConfig: NextConfig = {
	output: "export",
	reactStrictMode: true,
	images: {
		unoptimized: true,
	},
	...(isDev ? {} : { basePath: "/portfolio" }),
};

export default nextConfig;
