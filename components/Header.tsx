"use client"

import Link from "next/link"
import { Search, ShoppingCart } from "lucide-react"

import { useUser } from "@/hooks/useUser"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuShortcut,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

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

							<DropdownMenu>
								<DropdownMenuTrigger asChild>
									<Avatar className="cursor-pointer">
										<AvatarImage src="" alt="" />
										<AvatarFallback className="select-none">
											{user.name?.slice(0, 2).toLocaleUpperCase()}
										</AvatarFallback>
									</Avatar>
								</DropdownMenuTrigger>
								<DropdownMenuContent className="w-56">
									<DropdownMenuLabel>My Account</DropdownMenuLabel>
									<DropdownMenuSeparator />
									<DropdownMenuGroup>
										<DropdownMenuItem>Profile</DropdownMenuItem>
										<DropdownMenuItem>Settings</DropdownMenuItem>
									</DropdownMenuGroup>
									<DropdownMenuSeparator />
									<DropdownMenuItem>Log out</DropdownMenuItem>
								</DropdownMenuContent>
							</DropdownMenu>
						</>
					) : (
						<Link href="/signin">Login</Link>
					)}
				</nav>
			</div>
		</header>
	)
}
