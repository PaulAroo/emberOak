import { graphql } from "@/graphql"

export const ProductItemFragment = graphql(`
	fragment ProductItem on Product {
		id
		description
		name
		status
		price
		photo {
			id
			altText
			image {
				publicUrlTransformed
			}
		}
	}
`)
