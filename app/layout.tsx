import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

import Page from "@/components/page"
import StyledComponentsRegistry from "@/lib/registry"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
	title: "ecom",
	description: "ecommerce application",
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body>
				<StyledComponentsRegistry>
					<Page>{children}</Page>
				</StyledComponentsRegistry>
			</body>
		</html>
	)
}
