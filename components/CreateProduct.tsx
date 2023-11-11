"use client"

import { FormEvent } from "react"
import { useRouter } from "next/navigation"
import { gql, useMutation } from "@apollo/client"

import { useForm } from "@/utils/hooks/useForm"
import { ALL_PRODUCTS_QUERY } from "@/app/products/page"
import { CreateSingleProductMutation } from "@/__generated__/graphql"

import DisplayError from "./DisplayError"
import FormStyles from "./styles/FormStyles"

const CREATE_NEW_PRODUCT = gql`
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
`

export default function CreateProduct() {
	const router = useRouter()
	const { inputs, handleInputChange, clearFormInputs } = useForm({})

	const [createProduct, { loading, error }] =
		useMutation<CreateSingleProductMutation>(CREATE_NEW_PRODUCT, {
			variables: inputs,
			refetchQueries: [{ query: ALL_PRODUCTS_QUERY }],
		})

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const { data } = await createProduct()
		clearFormInputs()
		router.push(`/product/${data?.createProduct?.id}`)
	}

	return (
		<FormStyles onSubmit={handleSubmit}>
			<DisplayError error={error} />
			<fieldset disabled={loading} aria-busy={loading}>
				<label htmlFor="image">
					Image
					<input
						required
						type="file"
						name="image"
						id="image"
						onChange={handleInputChange}
					/>
				</label>
				<label htmlFor="name">
					Name
					<input
						placeholder="Name"
						required
						value={inputs.name ?? ""}
						type="text"
						id="name"
						name="name"
						onChange={handleInputChange}
					/>
				</label>
				<label htmlFor="price">
					Price
					<input
						placeholder="Price"
						required
						value={inputs.price ?? ""}
						type="number"
						id="price"
						name="price"
						onChange={handleInputChange}
					/>
				</label>
				<label htmlFor="description">
					Description
					<textarea
						placeholder="description"
						required
						name="description"
						id="description"
						value={inputs.description}
						onChange={handleInputChange}
					/>
				</label>
				<button type="submit">Add product</button>
			</fieldset>
		</FormStyles>
	)
}
