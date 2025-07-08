import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./assets/fontello/css/fontello.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const viewport: Viewport = {
	colorScheme: "dark",
};

export const metadata: Metadata = {
	title: "Gabriel Reverso - Portfólio",
	description:
		"Gabriel Reverso Pereira, desenvolvedor mobile, web e desktop. Descobra mais em meu portfólio!",
	keywords:
		"gabriel, gabriel reverso, gabriel reverso pereira, gabriel pereira, portfólio, desenvolvedor web, desenvolvedor mobile, desenvolvedor react, desenvolvedor next, desenvolvedor react-native",
	other: {
		"google-site-verification":
			"PUbVH2ESpk-SLcAo0t1Uw-NO-OBWm442Qv7YGwfOsJQ",
	},
	authors: [
		{
			name: "Gabriel Reverso Pereira",
			url: "https://www.linkedin.com/in/gabriel-reverso-pereira/",
		},
	],
	openGraph: {
		locale: "pt-BR",
		type: "website",
		title: "Gabriel Reverso - Portfólio",
		description:
			"Gabriel Reverso Pereira, desenvolvedor mobile, web e desktop. Descobra mais em meu portfólio!",
		siteName: "Portfólio",
		url: "https://gabrielreverso.github.io/portfolio",
		images: [
			{
				url: "https://gabrielreverso.github.io/portfolio/WebsitePreview.jpg",
				secureUrl:
					"https://gabrielreverso.github.io/portfolio/WebsitePreview.jpg",
				alt: "Portfolio Preview",
				type: "image/jpg",
			},
		],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt-BR">
			<head>
				<link rel="icon" href="/portfolio/favicon.ico" sizes="any" />
			</head>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				{children}
			</body>
		</html>
	);
}
