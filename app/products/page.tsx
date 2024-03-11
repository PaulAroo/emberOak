"use client"

import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr"

import { ALL_PRODUCTS_QUERY } from "@/lib/queries"
import { Product } from "@/components/Product/Product"

import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from "@/components/ui/pagination"
import { perPage } from "@/config"

export default function ProductsPage({ params }: { params: { page: string } }) {
	const { data, error } = useSuspenseQuery(ALL_PRODUCTS_QUERY)
	if (error) {
		console.log(0, error)
	}

	const page = !params.page || params.page === "1" ? 1 : parseInt(params.page)
	const totalNumberOfProducts = data.products?.length || 0
	console.log(totalNumberOfProducts)
	const totalNoOfPages = Math.ceil(totalNumberOfProducts / perPage)

	return (
		<section className="py-6">
			<Pagination>
				<PaginationContent>
					<PaginationItem>
						<PaginationPrevious
							aria-disabled={page < 2}
							href={`/products/${page - 1}`}
						/>
					</PaginationItem>
					<PaginationItem>
						<PaginationLink isActive={page === 1} href="/products/1">
							1
						</PaginationLink>
					</PaginationItem>
					<PaginationItem>
						<PaginationLink isActive={page === 2} href="/products/2">
							2
						</PaginationLink>
					</PaginationItem>
					<PaginationItem>
						<PaginationLink isActive={page === 3} href="/products/3">
							3
						</PaginationLink>
					</PaginationItem>
					<PaginationItem>
						<PaginationEllipsis />
					</PaginationItem>
					<PaginationItem>
						<PaginationLink
							isActive={page === totalNoOfPages}
							href={`/products/${totalNoOfPages}`}
						>
							{totalNoOfPages}
						</PaginationLink>
					</PaginationItem>
					<PaginationItem>
						<PaginationNext
							aria-disabled={page === totalNoOfPages}
							href={`/products/${page + 1}`}
						/>
					</PaginationItem>
				</PaginationContent>
			</Pagination>

			<div className="container">
				<h1>All products</h1>
				<div className="grid sm:grid-cols-2 gap-4">
					{data.products?.map((product) => (
						<Product key={product.id} data={product} />
					))}
				</div>
			</div>
		</section>
	)
}
