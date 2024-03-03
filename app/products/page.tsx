"use client"

import styled from "styled-components"
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr"

import { graphql } from "@/graphql"
import { Product } from "@/components/Product/Product"
import { ProductItemFragment } from "@/components/Product/parts"

const ALL_PRODUCTS_QUERY = graphql(
	`
		query GetAllProducts {
			products {
				id
				...ProductItem
			}
		}
	`,
	[ProductItemFragment]
)

const ProductListStyles = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: 60px;
`

export default function ProductsPage() {
	const { data } = useSuspenseQuery(ALL_PRODUCTS_QUERY)

	return (
		<div>
			products
			{
				<ProductListStyles>
					{data.products?.map((product) => (
						<Product key={product.id} data={product} />
					))}
				</ProductListStyles>
			}
		</div>
	)
}
