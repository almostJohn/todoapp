"use client";

import type { Metadata } from "next";
import { Providers } from "./providers";
import { inter } from "@/util/fonts";

import "../styles/custom.css";
import "../styles/globals.css";

export const metadata: Metadata = {
	title: {
		default: "todoapp.gg",
		template: "% | todoapp.gg",
	},
	viewport: {
		minimumScale: 1,
		initialScale: 1,
		width: "device-width",
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
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "#f5f5f5" },
		{ media: "(prefers-color-scheme: dark)", color: "#171717" },
	],
	colorScheme: "light dark",
	other: {
		"msapplication-TileColor": "#171717",
	},
};

export default function GlobalError({ error }: { error: Error }) {
	console.error(error);

	return (
		<html className={inter.variable} lang="en" suppressHydrationWarning>
			<body className="bg-neutral-100 antialiased dark:bg-neutral-900 dark:text-neutral-200">
				<Providers>
					<main className="mx-auto max-w-2xl min-h-screen">
						<div className="flex flex-col justify-center items-center h-[100vh]">
							<h1 className="text-[6em] m-0">500</h1>
							<p className="text-[1.5em] m-0 mt-[20px] mb-5">Error.</p>
						</div>
					</main>
				</Providers>
			</body>
		</html>
	);
}
