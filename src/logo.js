export default ({ width, height, myArr }) => {
	return (
		<ul>
		{
			myArr.map(data =>
				<li>{  data.name }</li>
			)
		}
		</ul>
	);
};
