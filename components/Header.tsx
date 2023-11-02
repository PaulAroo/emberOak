"use client"

import Link from "next/link"
import Nav from "./Nav"
import styled from "styled-components"

import LogoStyles from "./styles/LogoStyles"

const HeaderStyles = styled.header`
	.bar {
		border-bottom: 10px solid var(--black, black);
		display: grid;
		grid-template-columns: auto 1fr;
		justify-content: space-between;
		align-items: stretch;
	}

	.sub-bar {
		display: grid;
		grid-template-columns: 1fr auto;
		border-bottom: 1px solid var(--black, black);
	}
`

export default function Header() {
	return (
		<HeaderStyles>
			<div className="bar">
				<LogoStyles>
					<Link href="/">ecom</Link>
				</LogoStyles>
				<Nav />
			</div>
			<div className="sub-bar">
				<p>search</p>
			</div>
		</HeaderStyles>
	)
}
