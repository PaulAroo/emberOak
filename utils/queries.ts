import { graphql } from "@/graphql"
import { ProductItemFragment } from "@/components/Product/parts"

export const ALL_PRODUCTS_QUERY = graphql(
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
