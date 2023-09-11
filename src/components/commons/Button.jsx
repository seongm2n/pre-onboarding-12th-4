function Button({ value, district, children, onClick }) {
	return (
		<button
			onClick={(e) => onClick(e.currentTarget.textContent)}
			className={`${value === district ? 'btn-active' : 'btn'} `}
		>
			{children}
		</button>
	);
}

export default Button;
