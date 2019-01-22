import React from 'react'

const Theme = ({ len }) => {
	let list = [];
	for (let i = 0; i < len; i ++) {
		let l = i === 0 ? (<li key={i} className='theme-default'>1</li>) : (<li key={i} className={'theme-'+(i+1)}>{i+1}</li>)
		list.push(l);
	}
	return list;
}

export default Theme