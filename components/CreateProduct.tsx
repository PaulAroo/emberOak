"use client"

import { gql, useMutation } from "@apollo/client"

import { useForm } from "@/utils/hooks/useForm"

import FormStyles from "./styles/FormStyles"

const CREATE_NEW_PRODUCT = gql`
	mutation GET_ALL_PRODUCTS(
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
	const { inputs, handleInputChange } = useForm({})

	const [createProduct, { loading }] = useMutation(CREATE_NEW_PRODUCT, {
		variables: inputs,
	})

	return (
		<FormStyles
			onSubmit={async (e) => {
				e.preventDefault()
				await createProduct()
			}}
		>
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
						value={inputs.price ?? 0}
						type="number"
						id="price"
						name="price"
						onChange={handleInputChange}
					/>
				</label>
				<label htmlFor="description">
					Description
					<textarea
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
