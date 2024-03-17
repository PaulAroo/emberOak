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
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useMutation } from "@apollo/client"
import { USER_SIGN_OUT } from "@/lib/mutations"
import { GET_USER_QUERY } from "@/lib/queries"

export function Header() {
	const user = useUser()

	const [signout] = useMutation(USER_SIGN_OUT, {
		refetchQueries: [GET_USER_QUERY],
	})

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
									<DropdownMenuItem onClick={() => signout()}>
										Log out
									</DropdownMenuItem>
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
