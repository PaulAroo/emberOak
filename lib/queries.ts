import { graphql } from "@/graphql"
import { ProductItemFragment } from "@/lib/fragments"

const ALL_PRODUCTS_QUERY = graphql(
	`
		query GetAllProducts($skip: Int = 0, $take: Int) {
			products(take: $take, skip: $skip) {
				id
				...ProductItem
			}
		}
	`,
	[ProductItemFragment]
)

const SINGLE_PRODUCT_QUERY = graphql(`
	query GetProduct($where: ProductWhereUniqueInput!) {
		product(where: $where) {
			id
			name
			description
			price
			photo {
				image {
					publicUrlTransformed
				}
				altText
			}
		}
	}
`)

const PRODUCTS_COUNT_QUERY = graphql(`
	query GetProductsCount {
		productsCount
	}
`)

export { ALL_PRODUCTS_QUERY, SINGLE_PRODUCT_QUERY, PRODUCTS_COUNT_QUERY }
