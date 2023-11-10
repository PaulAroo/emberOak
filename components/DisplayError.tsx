import React from "react"

import { ApolloError } from "@apollo/client/errors"

import ErrorStyles from "./styles/ErrorStyles"

export default function DisplayError({ error }: { error?: ApolloError }) {
	if (!error || !error.message) return null
	let errorMessage = error.message
	if (error.graphQLErrors.length) {
		const missingVariables = error.message
			.match(/\$\w+/g)
			?.map((s) => s.replace("$", ""))
			.join(", ")
		if (missingVariables) {
			errorMessage = `Variable(s) ${missingVariables} was not provided`
		}
	}
	return (
		<ErrorStyles>
			<p data-test="graphql-error">{errorMessage}</p>
		</ErrorStyles>
	)
}
