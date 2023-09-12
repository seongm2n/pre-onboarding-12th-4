import styled from 'styled-components';

export const ErrorLayout = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 20px;
	background-color: #676464;
	width: 100%;
	height: 100vh;
	font-family: 'Nanum Pen Script', cursive;

	button {
		font-family: 'Nanum Pen Script', cursive;
		padding: 10px;
		font-size: 20px;
		border-radius: 30px;
		color: hotpink;
		background-color: white;

		&:hover {
			background-color: pink;
		}
	}
`;

export const Error = styled.div`
	display: flex;
	text-align: center;
	justify-content: center;

	font-weight: bold;
	font-size: 50px;
	color: hotpink;
	flex-direction: column;

	h1 {
		margin: 100px;
	}
	h3 {
		font-size: 30px;
		color: pink;
	}
`;
