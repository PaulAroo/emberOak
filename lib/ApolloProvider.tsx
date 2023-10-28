"use client"

import { ReactNode } from "react"
import { ApolloLink } from "@apollo/client"
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
