import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr"

export default function SingleProductPage({
	params,
}: {
	params: { id: string }
}) {
	return <div>single product with id {params.id}</div>
}
