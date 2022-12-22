import React, { Children, Fragment } from "react";

const Card = (props) => {
	return (
		<Fragment>
			<div className="bg-gray-200 p-4">{props.children};</div>
		</Fragment>
	);
};

export default Card;
