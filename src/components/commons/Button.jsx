import { StyledButton } from '../../styles/Button';

function Button({ value, district, children, onClick }) {
	return (
		<StyledButton
			active={value === district}
			onClick={() => onClick(children)}
		>
			{children}
		</StyledButton>
	);
}

export default Button;
