import { ProductGrid } from "@/components/ProductGrid"
import { Suspense } from "react"

export default function HomePage() {
	return (
		<main>
			<section>
				<div className="container">
					<ProductGrid />
				</div>
			</section>
		</main>
	)
}
