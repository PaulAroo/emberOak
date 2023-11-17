import Link from "next/link"

import Title from "./styles/Title"
import PriceTag from "./styles/PriceTag"
import ItemStyles from "./styles/ItemStyles"

import { formatMoney } from "@/utils/formatMoney"
import type { ProductItemFragment } from "@/__generated__/graphql"

export function Product({ product }: { product: ProductItemFragment }) {
	return (
		<ItemStyles>
			<img
				src={product.photo?.image?.publicUrlTransformed!}
				alt={product.name!}
			/>
			<Title>
				<Link href={`/product/${product.id}`}>{product.name}</Link>
			</Title>
			<PriceTag>{formatMoney(product.price!)}</PriceTag>
			<p>{product.description}</p>
		</ItemStyles>
	)
}
