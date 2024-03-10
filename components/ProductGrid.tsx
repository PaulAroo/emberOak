"use client"

import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr"

import { ALL_PRODUCTS_QUERY } from "@/lib/queries"
import { Product } from "@/components/Product/Product"
import Link from "next/link"

export function ProductGrid() {
	const { data } = useSuspenseQuery(ALL_PRODUCTS_QUERY)

	if (!data.products) {
		throw new Error("no products found")
	}

	const products = data.products.slice(0, 4)
	return (
		<>
			<div className="flex flex-row-reverse py-2">
				<Link href="/products" className="underline">
					All products
				</Link>
			</div>
			<div className="grid sm:grid-cols-2 gap-4">
				{products.map((product) => (
					<Product key={product.id} data={product} />
				))}
			</div>
		</>
	)
}
