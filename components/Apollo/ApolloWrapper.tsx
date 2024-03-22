"use client"

import { ReactNode } from "react"
import { ApolloNextAppProvider } from "@apollo/experimental-nextjs-app-support/ssr"

import { makeClient } from "./makeClient"

interface ApolloWrapperProps {
	children: ReactNode
	headers: any
}

export default function ApolloWrapper({
	children,
	headers,
}: ApolloWrapperProps) {
	return (
		<ApolloNextAppProvider makeClient={makeClient(headers)}>
			{children}
		</ApolloNextAppProvider>
	)
}
