"use client"

import { gql } from "@/__generated__/gql"
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr"

const GET_PRODUCTS_COUNT = gql(`
		query GetProductsCount {
			productsCount
		}
	`)

export default function ProductsPage() {
	const { data } = useSuspenseQuery(GET_PRODUCTS_COUNT)
	return <div> {data.productsCount} products!!</div>
}
