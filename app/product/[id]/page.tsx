import { SingleProduct } from "@/components/SingleProduct"

export default function SingleProductPage({
	params,
}: {
	params: { id: string }
}) {
	return (
		<section className="py-6">
			<div className="container">
				<SingleProduct id={params.id} />
			</div>
		</section>
	)
}
