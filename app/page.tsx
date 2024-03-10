import { ProductGrid } from "@/components/ProductGrid"

export default function HomePage() {
	return (
		<main>
			<section className="bg-slate-200 py-6">
				<div className="container">
					<ProductGrid />
				</div>
			</section>
		</main>
	)
}
