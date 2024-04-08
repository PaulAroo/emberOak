import Link from "next/link"
import { Nav } from "./Nav"

export function Header() {
	return (
		<header className="py-2 border-b">
			<div className="container flex justify-between items-center">
				<Link href="/" className="no-underline">
					EmberOak
				</Link>
				<Nav />
			</div>
		</header>
	)
}
