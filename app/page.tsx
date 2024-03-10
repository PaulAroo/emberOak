import { ProductGrid } from "@/components/ProductGrid"
import { Suspense } from "react"

export default function HomePage() {
	return (
		<main>
			<section className="py-6">
				<div className="container">
					<Suspense fallback={<p>loading...</p>}>
						<ProductGrid />
					</Suspense>
				</div>
			</section>
		</main>
	)
}
