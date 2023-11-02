"use client"

import { useForm } from "@/utils/hooks/useForm"

import FormStyles from "./styles/FormStyles"

export default function CreateProduct() {
	const { inputs, handleInputChange } = useForm({
		name: "thrills",
	})

	return (
		<FormStyles
			onSubmit={(e) => {
				e.preventDefault()
			}}
		>
			<fieldset>
				<label htmlFor="image">
					Image
					<input
						required
						type="file"
						name="image"
						id="image"
						onChange={handleInputChange}
						value={inputs.image}
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
				<button>Add product</button>
			</fieldset>
		</FormStyles>
	)
}
