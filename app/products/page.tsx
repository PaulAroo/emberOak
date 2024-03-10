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
		<section className="py-6">
			<div className="container">
				<h1>All products</h1>
				<div className="grid sm:grid-cols-2 gap-4">
					{data.products?.map((product) => (
						<Product key={product.id} data={product} />
					))}
				</div>
			</div>
		</section>
	)
}
