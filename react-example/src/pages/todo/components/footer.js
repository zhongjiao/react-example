import React from 'react'
import FilterLink from '../containers/filterLinks'
import { VisibilityFilters } from '../action'

const List = (prop) => {
	return (
		<div>
			<FilterLink type={VisibilityFilters.TOGGLE_TODO}>Toggle</FilterLink>
			<FilterLink type={VisibilityFilters.FILTER_TODO}>Filter</FilterLink>
		</div>
	)
}

export default List;