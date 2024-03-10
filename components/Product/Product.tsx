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
		<div className="bg-white shadow-md">
			<div className="relative min-h-60 lg:min-h-80 xl:min-h-96">
				<Image
					src={product.photo?.image?.publicUrlTransformed!}
					alt={product.name!}
					fill
					className="object-cover"
				/>
			</div>
			<div className="py-2">
				<h2>
					<Link href={`/product/${product.id}`}>{product.name}</Link>
				</h2>
				<p>{formatMoney(product.price!)}</p>
				<p>{product.description}</p>
			</div>
		</div>
	)
}
