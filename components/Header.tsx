import Nav from "./Nav"
import Link from "next/link"

export default function Header() {
	return (
		<>
			<div className="bar">
				<Link href="/">ecom</Link>
				<Nav />
			</div>
			<div className="sub-bar">
				<p>search</p>
			</div>
		</>
	)
}
