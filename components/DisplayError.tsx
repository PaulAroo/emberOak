import React from "react"
import styled from "styled-components"

import { ApolloError } from "@apollo/client/errors"

const ErrorStyles = styled.div`
	padding: 2rem;
	background: white;
	margin: 2rem 0;
	border: 1px solid rgba(87, 82, 82, 0.05);
	border-left: 5px solid red;
	p {
		margin: 0;
		font-weight: 100;
		color: red;
	}
	strong {
		margin-right: 1rem;
	}
`

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
