"use client"

import Link from "next/link"
import { Search, ShoppingCart } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useUser } from "@/hooks/useUser"

export const Nav = () => {
	const { user, signout } = useUser()

	return (
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
							<DropdownMenuItem onClick={() => signout()}>
								Log out
							</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				</>
			) : (
				<Link href="/signin">Sign in</Link>
			)}
		</nav>
	)
}
