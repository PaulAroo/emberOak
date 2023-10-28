"use client"

import { ReactNode } from "react"
import { ApolloLink } from "@apollo/client"
import { onError } from "@apollo/client/link/error"
import {
	ApolloNextAppProvider,
	NextSSRInMemoryCache,
	NextSSRApolloClient,
	SSRMultipartLink,
} from "@apollo/experimental-nextjs-app-support/ssr"

import createUploadLink from "apollo-upload-client/createUploadLink.mjs"

import { endpoint, prodEndpoint } from "@/config"

function makeClient(headers: any, initialState: any) {
	const uri = process.env.NODE_ENV === "development" ? endpoint : prodEndpoint

	return () => {
		const httpLink = createUploadLink({
			uri,
			fetchOptions: {
				credentials: "include",
			},
			headers,
		})

		return new NextSSRApolloClient({
			cache: new NextSSRInMemoryCache({
				typePolicies: {
					Query: {
						fields: {},
					},
				},
			}).restore(initialState || {}),
			link:
				typeof window === "undefined"
					? ApolloLink.from([
							new SSRMultipartLink({
								stripDefer: true,
							}),
							httpLink,
							onError(({ graphQLErrors, networkError }) => {
								if (graphQLErrors)
									graphQLErrors.forEach(({ message, locations, path }) =>
										console.log(
											`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
										)
									)
								if (networkError)
									console.log(
										`[Network error]: ${networkError}. Backend is unreachable. Is it running?`
									)
							}),
					  ])
					: httpLink,
		})
	}
}

interface ApolloWrapperProps {
	children: ReactNode
	headers: any
	initialState: any
}

export default function ApolloWrapper({
	children,
	headers,
	initialState,
}: ApolloWrapperProps) {
	return (
		<ApolloNextAppProvider makeClient={makeClient(headers, initialState)}>
			{children}
		</ApolloNextAppProvider>
	)
}
