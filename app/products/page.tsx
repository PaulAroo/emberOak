"use client"

import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr"

import { ALL_PRODUCTS_QUERY } from "@/lib/queries"
import { Product } from "@/components/Product/Product"

export default function ProductsPage() {
	const { data, error } = useSuspenseQuery(ALL_PRODUCTS_QUERY)

	if (error) {
		console.log(0, error)
	}

	return (
		<div>
			products
			{
				<div className="grid grid-cols-2">
					{data.products?.map((product) => (
						<Product key={product.id} data={product} />
					))}
				</div>
			}
		</div>
	)
}
