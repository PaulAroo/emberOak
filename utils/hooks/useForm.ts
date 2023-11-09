import { useState, ChangeEvent } from "react"

type FromInputs = {
	name?: string
	price?: number
	description?: string
	image?: File
}

function resetObject<
	Obj extends Record<string, string | number | boolean | File>
>(obj: Obj) {
	return Object.fromEntries(
		Object.entries(obj).map(([key, value]) => [
			key,
			(() => {
				switch (typeof value) {
					case "string":
						return ""
					case "number":
						return 0
					case "boolean":
						return false
				}
			})(),
		])
	) as Obj
}

export function useForm(initial: FromInputs) {
	const [inputs, setInputs] = useState(initial)

	const handleInputChange = (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		let { value, type, name } = e.target

		if (type === "number") {
			setInputs({
				...inputs,
				price: parseInt(value),
			})
		} else if (type === "file") {
			const [file] = (e.target as HTMLInputElement).files!
			setInputs({
				...inputs,
				image: file,
			})
		} else {
			setInputs({
				...inputs,
				[name]: value,
			})
		}
	}

	const clearFormInputs = () => {
		setInputs(resetObject(initial))
	}

	const resetInputs = () => {
		setInputs(initial)
	}

	return { inputs, resetInputs, clearFormInputs, handleInputChange }
}
