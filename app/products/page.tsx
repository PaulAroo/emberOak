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

	console.log({ client, data })
	return <div>products!!</div>
}
