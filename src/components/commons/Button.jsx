function Button({ left, right, children, onClick }) {
	return (
		<button
			onClick={(e) => onClick(e.currentTarget.textContent)}
			className={`${left === right ? 'btn-active' : 'btn'} `}
		>
			{children}
		</button>
	);
}

export default Button;
