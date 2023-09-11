import styled from 'styled-components';

export default function Header() {
	return (
		<Layout>
			<h1>Time Series Chart</h1>
		</Layout>
	);
}

const Layout = styled.header`
	display: flex;
	flex-direction: row;
	justify-content: center;
	font-size: large;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);

	h1 {
		margin: 20px;
		padding: 15px;
		font-weight: bold;
		font-size: 40px;
		color: hotpink;
		font-family: 'Nanum Pen Script', cursive;
	}
`;
