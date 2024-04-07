import { graphql } from "@/graphql"

export const CREATE_NEW_PRODUCT = graphql(`
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

export const USER_SIGN_IN = graphql(`
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

export const USER_SIGN_UP = graphql(`
	mutation CreateUser($data: UserCreateInput!) {
		createUser(data: $data) {
			id
			name
			email
		}
	}
`)

export const USER_SIGN_OUT = graphql(`
	mutation signout {
		endSession
	}
`)

export const SEND_RESET_LINK = graphql(`
	mutation SendUserPasswordResetLink($email: String!) {
		sendUserPasswordResetLink(email: $email)
	}
`)

export const PASSWORD_RESET = graphql(`
	mutation RedeemUserPasswordResetToken(
		$email: String!
		$token: String!
		$password: String!
	) {
		redeemUserPasswordResetToken(
			email: $email
			token: $token
			password: $password
		) {
			message
			code
		}
	}
`)
