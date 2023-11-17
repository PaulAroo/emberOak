"use client"

import styled from "styled-components"
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr"

import { Product } from "@/components/Product"
import { getFragmentData, graphql } from "@/__generated__"

export const ProductFragment = graphql(`
	fragment ProductItem on Product {
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
`)

export const ALL_PRODUCTS_QUERY = graphql(`
	query GetAllProducts {
		products {
			...ProductItem
		}
	}
`)

const ProductListStyles = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: 60px;
`

export default function ProductsPage() {
	const { data } = useSuspenseQuery(ALL_PRODUCTS_QUERY)
	const products = getFragmentData(ProductFragment, data.products)

	return (
		<div>
			<ProductListStyles>
				{products?.map((product) => (
					<Product key={product.id} product={product} />
				))}
			</ProductListStyles>
		</div>
	)
}
