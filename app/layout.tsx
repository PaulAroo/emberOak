import "./globals.css"
// import NProgress from "nprogress"
import type { Metadata } from "next"

import Page from "@/components/page"
import StyledComponentsRegistry from "@/lib/registry"
import Providers from "@/lib/Providers"

// Router.events.on("routeChangeStart", () => NProgress.start())
// Router.events.on("routeChangeComplete", () => NProgress.done())
// Router.events.on("routeChangeError", () => NProgress.done())

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
				<Providers>
					<StyledComponentsRegistry>
						<Page>{children}</Page>
					</StyledComponentsRegistry>
				</Providers>
			</body>
		</html>
	)
}
