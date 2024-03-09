import Link from "next/link"
import Image from "next/image"

import { formatMoney } from "@/lib/utils"
import { ProductItemFragment } from "./parts"
import { FragmentOf, readFragment } from "@/graphql"

interface Props {
	data: FragmentOf<typeof ProductItemFragment>
}

export function Product({ data }: Props) {
	const product = readFragment(ProductItemFragment, data)

	return (
		<div>
			<div>
				{/* <Image
					src={product.photo?.image?.publicUrlTransformed!}
					alt={product.name!}
					fill
				/> */}
			</div>
			<h2>
				<Link href={`/product/${product.id}`}>{product.name}</Link>
			</h2>
			<p>{formatMoney(product.price!)}</p>
			<p>{product.description}</p>
		</div>
	)
}
