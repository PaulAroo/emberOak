import Link from "next/link"
import Image from "next/image"

import Title from "../../styles/Title"
import PriceTag from "../../styles/PriceTag"
import ItemStyles from "../../styles/ItemStyles"

import { ProductItemFragment } from "./parts"
import { formatMoney } from "@/utils/formatMoney"
import { FragmentOf, readFragment } from "@/graphql"

interface Props {
	data: FragmentOf<typeof ProductItemFragment>
}

export function Product({ data }: Props) {
	const product = readFragment(ProductItemFragment, data)

	return (
		<ItemStyles>
			<div>
				<Image
					src={product.photo?.image?.publicUrlTransformed!}
					alt={product.name!}
					fill
				/>
			</div>
			<Title>
				<Link href={`/product/${product.id}`}>{product.name}</Link>
			</Title>
			<PriceTag>{formatMoney(product.price!)}</PriceTag>
			<p>{product.description}</p>
		</ItemStyles>
	)
}
