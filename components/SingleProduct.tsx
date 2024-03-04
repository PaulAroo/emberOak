"use client"

import styled from "styled-components"
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr"

import DisplayError from "./DisplayError"
import { SINGLE_PRODUCT_QUERY } from "@/utils/queries"

const ProductStyles = styled.div``

export const SingleProduct = ({ id }: { id: string }) => {
	const { data, error } = useSuspenseQuery(SINGLE_PRODUCT_QUERY, {
		variables: {
			where: {
				id,
			},
		},
	})

	if (error) return <DisplayError error={error} />

	const product = data.product!
	const imgUrl = product.photo?.image?.publicUrlTransformed!
	const altText = product.photo?.altText!

	return (
		<ProductStyles>
			<img src={imgUrl} alt={altText} />

			<h1>{product.name}</h1>
			<p>{product.description}</p>
			<p>{product.price}</p>
		</ProductStyles>
	)
}
