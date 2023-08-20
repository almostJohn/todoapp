import "./globals.css";
import type { Metadata } from "next";
import type { PropsWithChildren } from "react";
import { Providers } from "./providers";
import { inter } from "~/util/fonts";

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
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "#f5f5f5" },
		{ media: "(prefers-color-scheme: dark)", color: "#171717" },
	],
	colorScheme: "light dark",
	other: {
		"msapplication-TileColor": "#171717",
	},
};

export default function RootLayout({ children }: PropsWithChildren) {
	return (
		<html className={inter.className} lang="en" suppressHydrationWarning>
			<body className="bg-neutral-100 antialiased dark:bg-neutral-900 dark:text-neutral-200">
				<Providers>
					<div className="min-h-screen">{children}</div>
				</Providers>
			</body>
		</html>
	);
}
