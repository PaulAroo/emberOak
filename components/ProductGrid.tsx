"use client"

import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr"

import { ALL_PRODUCTS_QUERY } from "@/lib/queries"
import { Product } from "@/components/Product/Product"

export function ProductGrid() {
	const { data } = useSuspenseQuery(ALL_PRODUCTS_QUERY)

	return (
		<div className="grid sm:grid-cols-2 gap-4">
			{data.products?.map((product) => (
				<Product key={product.id} data={product} />
			))}
		</div>
	)
}
