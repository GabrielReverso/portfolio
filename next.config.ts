import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

const nextConfig: NextConfig = {
	basePath: isDev ? "" : "/portfolio",
	output: "export",
	reactStrictMode: true,
};

export default nextConfig;
