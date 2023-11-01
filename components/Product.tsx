import Title from "./styles/Title"
import PriceTag from "./styles/PriceTag"
import ItemStyles from "./styles/ItemStyles"

import type { Product } from "@/__generated__/graphql"
import Link from "next/link"
import { formatMoney } from "@/utils/formatMoney"

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
			<PriceTag>{formatMoney(product.price!)}</PriceTag>
			<p>{product.description}</p>
		</ItemStyles>
	)
}
