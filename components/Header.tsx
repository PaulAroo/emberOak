import Link from "next/link"

import { Search, ShoppingCart } from "lucide-react"

export function Header() {
	return (
		<header className="py-2 border-b">
			<div className="container flex justify-between">
				<Link href="/">Ecom</Link>
				<nav className="flex gap-4">
					{/* <Link href="/products">Products</Link>
					<Link href="/sell">Sell</Link>
					<Link href="/orders">Orders</Link> */}

					<Search />
					<ShoppingCart />
					<Link href="/account">Login</Link>
				</nav>
			</div>
		</header>
	)
}
