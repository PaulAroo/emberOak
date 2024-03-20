"use client"

import { AppProgressBar as ProgressBar } from "next-nprogress-bar"
import ApolloWrapper from "./ApolloProvider"

const Providers = ({
	children,
	session,
}: {
	children: React.ReactNode
	session: string | null
}) => {
	return (
		<ApolloWrapper session={session} initialState={{}}>
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
