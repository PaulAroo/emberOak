"use client"

import Link from "next/link"
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr"

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel"
import { ALL_PRODUCTS_QUERY } from "@/lib/queries"
import { Product } from "@/components/Product/Product"

export function ProductGrid() {
	const { data } = useSuspenseQuery(ALL_PRODUCTS_QUERY)

	if (!data.products) {
		throw new Error("no products found")
	}

	const products = data.products.slice(0, 4)
	return (
		<>
			<div className="flex flex-row-reverse py-2">
				<Link href="/products" className="underline">
					All products
				</Link>
			</div>
			<div>
				<Carousel opts={{ align: "start" }} className="shadow-md">
					<CarouselContent>
						{products.map((product) => (
							<CarouselItem
								key={product.id}
								className="md:basis-1/2 lg:basis-1/3"
							>
								<Product data={product} />
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious className="-left-5" />
					<CarouselNext className="-right-5" />
				</Carousel>
			</div>
		</>
	)
}
