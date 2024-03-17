"use client"

import Link from "next/link"
import { Search, ShoppingCart } from "lucide-react"

import { useUser } from "@/hooks/useUser"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function Header() {
	const user = useUser()

	return (
		<header className="py-2 border-b">
			<div className="container flex justify-between">
				<Link href="/">EmberOak</Link>
				<nav className="flex gap-4 items-center">
					<Link href="/products">Products</Link>
					<Search />
					{user ? (
						<>
							<ShoppingCart />
							<Avatar>
								<AvatarImage src="" alt="" />
								<AvatarFallback>
									{user.name?.slice(0, 2).toLocaleUpperCase()}
								</AvatarFallback>
							</Avatar>
						</>
					) : (
						<Link href="/signin">Login</Link>
					)}
				</nav>
			</div>
		</header>
	)
}
