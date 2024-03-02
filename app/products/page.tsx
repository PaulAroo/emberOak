"use client"

import styled from "styled-components"
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr"

import { Product } from "@/components/Product"
import { gql } from "@apollo/client"

const ALL_PRODUCTS_QUERY = gql(`
	query GetAllProducts {
		products {
			id
			description
			name
			status
			price
			photo {
				id
				altText
				image {
					publicUrlTransformed
				}
			}
		}
	}
`)

const ProductListStyles = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: 60px;
`

export default function ProductsPage() {
	// const { data } = useSuspenseQuery(ALL_PRODUCTS_QUERY)

	return (
		<div>
			products
			{/* <ProductListStyles>
				{x.products?.map((product) => (
					<Product key={product.id} product={product} />
				))}
			</ProductListStyles> */}
		</div>
	)
}
