"use client";

import type { Metadata, Viewport } from "next";
import { Providers } from "./providers";
import { inter } from "@/util/fonts";

import "../styles/custom.css";
import "../styles/globals.css";

export const metadata: Metadata = {
	title: {
		default: "todoapp.gg",
		template: "% | todoapp.gg",
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

export const viewport: Viewport = {
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "#f5f5f5" },
		{ media: "(prefers-color-scheme: dark)", color: "#171717" },
	],
	colorScheme: "light dark",
};

export default function GlobalError({ error }: { error: Error }) {
	console.error(error);

	return (
		<html className={inter.variable} lang="en" suppressHydrationWarning>
			<body className="bg-neutral-100 antialiased dark:bg-neutral-900 dark:text-neutral-200">
				<Providers>
					<main className="mx-auto max-w-2xl min-h-screen">
						<div className="mx-auto max-w-lg min-h-screen flex flex-col place-content-center place-items-center gap-8 px-8 py-16 lg:px-6 lg:py-0">
							<h1 className="text-[12rem] font-black leading-none md:text-[6rem]">500</h1>
							<h2 className="text-[3rem] md:text-[3rem] text-center">Error.</h2>
						</div>
					</main>
				</Providers>
			</body>
		</html>
	);
}
