"use client"

import styled from "styled-components"
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr"

import { gql } from "@/__generated__/gql"
import { Product } from "@/components/Product"

const GET_ALL_PRODUCTS = gql(`
	query GetAllProducts {
  products {
    id,
    description,
    name,
    status,
    price
    photo {
      id
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
	const { data } = useSuspenseQuery(GET_ALL_PRODUCTS)
	return (
		<div>
			<ProductListStyles>
				{data.products?.map((product) => (
					<Product key={product.id} product={product} />
				))}
			</ProductListStyles>
		</div>
	)
}
