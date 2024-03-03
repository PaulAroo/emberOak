import Link from "next/link"
import { FragmentOf, readFragment } from "gql.tada"

import Title from "../../styles/Title"
import PriceTag from "../../styles/PriceTag"
import ItemStyles from "../../styles/ItemStyles"

import { ProductItemFragment } from "./parts"
import { formatMoney } from "@/utils/formatMoney"

interface Props {
	data: FragmentOf<typeof ProductItemFragment>
}

export function Product({ data }: Props) {
	const product = readFragment(ProductItemFragment, data)

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
