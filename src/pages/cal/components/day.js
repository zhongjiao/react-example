import React from 'react'

const Day = ({ len }) => {
	let list = [];
	for (let i = 1; i < len; i ++) {
		let l = <div key={i} className='day'>{i}</div>
		list.push(l);
	}
	return list;
}

export default Day