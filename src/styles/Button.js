import styled from 'styled-components';

export const StyledButton = styled.button`
	background-color: ${(props) => (props.active ? '#9b634c' : '#bfa398')};
	color: white;
	padding: 8px 16px;
	border-radius: 20px;
	font-family: 'Nanum Pen Script', cursive;
  font-size: 20px;

	&:hover {
		background-color: #9b634c;
	}
`;

export const BtnLayout = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 10px;
`;
