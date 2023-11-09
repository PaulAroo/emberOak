"use client"

import { ReactNode } from "react"
import { ApolloLink } from "@apollo/client"
import { onError } from "@apollo/client/link/error"
import { setContext } from "@apollo/client/link/context"
import {
	ApolloNextAppProvider,
	NextSSRInMemoryCache,
	NextSSRApolloClient,
	SSRMultipartLink,
} from "@apollo/experimental-nextjs-app-support/ssr"

import createUploadLink from "apollo-upload-client/createUploadLink.mjs"

import { endpoint, prodEndpoint } from "@/config"

// TODO: add the right types
function makeClient(headers: any, initialState: any) {
	const uri = process.env.NODE_ENV === "development" ? endpoint : prodEndpoint

	return () => {
		const uploadLink = createUploadLink({
			uri,
			fetchOptions: {
				credentials: "include",
			},
		})

		const presetHeaderLink = setContext(() => {
			return {
				headers: {
					"apollo-require-preflight": true,
				},
			}
		})

		const httpLink = presetHeaderLink.concat(uploadLink)

		return new NextSSRApolloClient({
			connectToDevTools: true,
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
					  ])
					: ApolloLink.from([
							onError(({ graphQLErrors, networkError }) => {
								if (graphQLErrors)
									graphQLErrors.forEach(({ message, locations, path }) =>
										console.log(
											0,
											`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
										)
									)
								if (networkError)
									console.log(
										`[Network error]: ${networkError}. Backend is unreachable. Is it running?`
									)
							}),
							httpLink,
					  ]),
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
