"use client"

import Link from "next/link"
import { Search, ShoppingCart } from "lucide-react"

import { useUser } from "@/hooks/useUser"

export function Header() {
	const user = useUser()

	return (
		<header className="py-2 border-b">
			<div className="container flex justify-between">
				<Link href="/">EmberOak</Link>
				<nav className="flex gap-4">
					<Search />
					<Link href="/products">Products</Link>
					{user ? (
						<>
							<p>{user.name}</p>
							<ShoppingCart />
						</>
					) : (
						<Link href="/signin">Login</Link>
					)}
				</nav>
			</div>
		</header>
	)
}
