import Title from "./styles/Title"
import PriceTag from "./styles/PriceTag"
import ItemStyles from "./styles/ItemStyles"

import type { Product } from "@/__generated__/graphql"
import Link from "next/link"

export function Product({ product }: { product: Product }) {
	return (
		<ItemStyles>
			<img
				src={product.photo?.image?.publicUrlTransformed!}
				alt={product.name!}
			/>
			<Title>
				<Link href={`/product/${product.id}`}>{product.name}</Link>
			</Title>
			<PriceTag>{product.price}</PriceTag>
			<p>{product.description}</p>
		</ItemStyles>
	)
}
