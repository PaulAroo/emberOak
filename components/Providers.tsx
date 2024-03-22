"use client"

import { AppProgressBar as ProgressBar } from "next-nprogress-bar"
import ApolloWrapper from "./ApolloProvider"

const Providers = ({
	children,
	session,
	headers,
}: {
	children: React.ReactNode
	session: string | null
	headers: any
}) => {
	return (
		<ApolloWrapper session={session} initialState={{}} headers={headers}>
			{children}
			<ProgressBar
				height="4px"
				color="red"
				options={{ showSpinner: false }}
				shallowRouting
			/>
		</ApolloWrapper>
	)
}

export default Providers
