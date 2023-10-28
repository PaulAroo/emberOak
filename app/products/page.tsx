"use client"

import { gql } from "@apollo/client"
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr"

const query = gql`
	query {
		productsCount
	}
`

export default function ProductsPage() {
	const { data, client } = useSuspenseQuery(query)
	const data_untyped = data as any
	// TODO figure out a way to make sure returned data is typed

	console.log({ client, data })
	return <div> {data_untyped.productsCount} products!!</div>
}
