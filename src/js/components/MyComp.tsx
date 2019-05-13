import React from 'react';

type MyCompProps = {
	name: 'Dennis' | 'Omar',
	isMarried: boolean,
	kids: 2 | 4,
	livedIn: ['CA', 'AZ']
};

const MyComp = (props:MyCompProps) => {
	return (
		<div>
			<h1>{props.name}</h1>
		</div>
	);
}

export default MyComp;