"use client"

import Image from "next/image"
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr"

import DisplayError from "./DisplayError"
import { formatMoney } from "@/lib/utils"
import { SINGLE_PRODUCT_QUERY } from "@/lib/queries"

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
		<div>
			<div className="relative min-h-60 lg:min-h-80 xl:min-h-96">
				<Image src={imgUrl} alt={altText} fill className="object-cover" />
			</div>

			<h1>{product.name}</h1>
			<p>{product.description}</p>
			<p>{formatMoney(product.price!)}</p>
		</div>
	)
}
