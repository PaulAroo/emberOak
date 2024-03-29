import { graphql } from "@/graphql"

const CREATE_NEW_PRODUCT = graphql(`
	mutation CreateSingleProduct(
		$name: String!
		$description: String!
		$price: Int!
		$image: Upload
	) {
		createProduct(
			data: {
				name: $name
				description: $description
				price: $price
				status: "AVAILABLE"
				photo: { create: { image: $image, altText: $name } }
			}
		) {
			id
			name
			price
		}
	}
`)

const USER_SIGN_IN = graphql(`
	mutation AuthenticateUserWithPassword($email: String!, $password: String!) {
		authenticateUserWithPassword(email: $email, password: $password) {
			... on UserAuthenticationWithPasswordSuccess {
				sessionToken
				item {
					name
					email
				}
			}
			... on UserAuthenticationWithPasswordFailure {
				message
			}
		}
	}
`)

const USER_SIGN_UP = graphql(`
	mutation CreateUser($data: UserCreateInput!) {
		createUser(data: $data) {
			id
			name
			email
		}
	}
`)

const USER_SIGN_OUT = graphql(`
	mutation signout {
		endSession
	}
`)

export { CREATE_NEW_PRODUCT, USER_SIGN_IN, USER_SIGN_OUT, USER_SIGN_UP }
