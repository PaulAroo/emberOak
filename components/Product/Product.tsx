"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"

import { formatMoney } from "@/lib/utils"
import { FragmentOf, readFragment } from "@/graphql"
import { ProductItemFragment } from "@/lib/fragments"

interface Props {
	data: FragmentOf<typeof ProductItemFragment>
}

export function Product({ data }: Props) {
	const product = readFragment(ProductItemFragment, data)

	const [isClient, setIsClient] = useState(false)

	useEffect(() => {
		setIsClient(true)
	}, [])

	return (
		<div className="bg-white shadow-md">
			<div className="relative min-h-60 lg:min-h-80 xl:min-h-96">
				<Image
					src={product.photo?.image?.publicUrlTransformed!}
					alt={product.name!}
					fill
					className="object-cover"
				/>
			</div>
			<div className="py-2">
				<h2>
					<Link href={`/product/${product.id}`}>{product.name}</Link>
				</h2>
				{isClient && <p>{formatMoney(product.price!)}</p>}

				<p>{product.description}</p>
			</div>
		</div>
	)
}
