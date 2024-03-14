import { GET_USER_QUERY } from "@/lib/queries"
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr"

export function useUser() {
	const { data } = useSuspenseQuery(GET_USER_QUERY, {
		fetchPolicy: "network-only",
	})
	return data.authenticatedItem
}
