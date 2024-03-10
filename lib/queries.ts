import { graphql } from "@/graphql"
import { ProductItemFragment } from "@/components/Product/parts"

const ALL_PRODUCTS_QUERY = graphql(
	`
		query GetAllProducts {
			products {
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

export { ALL_PRODUCTS_QUERY, SINGLE_PRODUCT_QUERY }
