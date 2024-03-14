import { Suspense } from "react"

import Container from "@/components/MainContainer"
import { ProductGrid } from "@/components/ProductGrid"

export default function HomePage() {
	return (
		<Container>
			<Suspense fallback={<p>loading...</p>}>
				<ProductGrid />
			</Suspense>
		</Container>
	)
}
