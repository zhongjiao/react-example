import React from 'react';

const List = ({ lists }) => {

	return (
		<ul>
			{lists.map(({id, text, isShow}) => (
				<li key={id} style={{'display': isShow ? '' : 'none'}}>{text}</li>
			))}
		</ul>
	)
}

export default List;