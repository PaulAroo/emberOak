import { useMutation } from "@apollo/client"
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr"

import { GET_USER_QUERY } from "@/lib/queries"
import { USER_SIGN_OUT } from "@/lib/mutations"

export function useUser() {
	const { data } = useSuspenseQuery(GET_USER_QUERY, {
		fetchPolicy: "network-only",
	})

	const [signout] = useMutation(USER_SIGN_OUT, {
		refetchQueries: [GET_USER_QUERY],
	})

	return { user: data.authenticatedItem, signout }
}
