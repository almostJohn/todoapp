import type { Metadata } from "next";
import type { PropsWithChildren } from "react";
import { Providers } from "./providers";
import { inter, jetBrainsMono } from "@/util/fonts";

import "../styles/globals.css";
import "../styles/custom.css";

export const metadata: Metadata = {
	title: {
		default: "todoapp",
		template: "% | todoapp",
	},
	icons: {
		other: [
			{
				url: "/favicon.png",
				sizes: "32x32",
				type: "image/png",
			},
			{
				url: "/favicon.png",
				sizes: "16x16",
				type: "image/png",
			},
		],
	},
};

export default function RootLayout({ children }: PropsWithChildren) {
	return (
		<html className={`${inter.variable} ${jetBrainsMono.variable}`} lang="en" suppressHydrationWarning>
			<body className="min-h-screen bg-background antialiased font-sans text-[0.9rem]">
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
