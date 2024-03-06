"use client"

import Image from "next/image"
import styled from "styled-components"
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr"

import DisplayError from "./DisplayError"
import { formatMoney } from "@/utils/formatMoney"
import { SINGLE_PRODUCT_QUERY } from "@/utils/queries"

const ProductStyles = styled.div`
	div {
		position: relative;
		min-height: 400px;
	}
	img {
		object-fit: contain;
	}
`

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
			<div>
				<Image src={imgUrl} alt={altText} fill />
			</div>

			<h1>{product.name}</h1>
			<p>{product.description}</p>
			<p>{formatMoney(product.price!)}</p>
		</ProductStyles>
	)
}
