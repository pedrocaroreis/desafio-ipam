import React, { Children, Fragment } from "react";

const Card = (props) => {
	return (
		<Fragment>
			<div className="flex-col bg-gray-200 w-full mx-auto pt-4">
				{props.children};
			</div>
		</Fragment>
	);
};

export default Card;
