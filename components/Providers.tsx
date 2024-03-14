"use client"

import { AppProgressBar as ProgressBar } from "next-nprogress-bar"
import ApolloWrapper from "./ApolloProvider"

const Providers = ({ children }: { children: React.ReactNode }) => {
	return (
		<ApolloWrapper initialState={{}}>
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
