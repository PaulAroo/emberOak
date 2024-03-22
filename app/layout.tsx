import "./globals.css"
import type { Metadata } from "next"
import { cookies, headers } from "next/headers"
import localFont from "next/font/local"

import { Header } from "@/components/Header"
import Providers from "@/components/Providers"

const radnika_font = localFont({
	src: "./radnikanext-medium-webfont.woff2",
	display: "swap",
	variable: "--font-radnik",
})

export const metadata: Metadata = {
	title: "Ember Oak",
	description: "Shop and sell furnitures online",
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	const session = headers().get("Cookie")
	// const cook = cookies().get("keystonejs-session")?.value
	// console.log(cookies().get("keystonejs-session"))

	const h = [...headers().keys()].join()
	console.log([...cookies()].join())
	const c = [...cookies()].join()

	return (
		<html lang="en" className={radnika_font.className}>
			<body className="min-h-dvh bg-[#faebd7]">
				<Providers session={session} headers={headers().headers}>
					<Header />
					<main>{children}</main>
					<p>{session}</p>
					{/* <p>sess</p>
					<p>{session}</p>
					<hr />
					<hr />
					<p>{cook}</p> */}
					<p>header keys: {h}</p>
					<p className="mt-4">cookies: {c}</p>
				</Providers>
			</body>
		</html>
	)
}
