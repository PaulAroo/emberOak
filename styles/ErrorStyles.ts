import styled from "styled-components"

const ErrorStyles = styled.div`
	padding: 1.5rem;
	background: white;
	margin: 2rem 0;
	border: 1px solid rgba(87, 82, 82, 0.05);
	border-left: 5px solid red;
	p {
		margin: 0;
		font-weight: 100;
		color: red;
	}
	strong {
		margin-right: 1rem;
	}
`

export default ErrorStyles
