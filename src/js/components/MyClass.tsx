import React from 'react';

export interface MyClassProps {
	name?: string; // ? means that this is optional
	isMarried: boolean;
}
export interface MyClassState {
	age: number;
	city: string;
}

class MyClass extends React.Component<MyClassProps, MyClassState> {

	public static defaultProps: Partial<MyClassProps> = {
		name: 'Jon Bruce',
		isMarried: false
	}

	state: Readonly<MyClassState> = {
		age: 21,
		city: 'Tbilisi'
	};

	render() {
		return (
			<div>
				<h1>My name is {this.props.name} and I am {this.state.age} years old.</h1>
				<h2>isMarried:{this.props.isMarried.toString()}</h2>
			</div>
		);
	}
}

export default MyClass;