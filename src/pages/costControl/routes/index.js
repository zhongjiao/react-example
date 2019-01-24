const uuid = () => Math.random().toString(16).substring(2, 8)

const routes = [
	{
		id: uuid(),
		path: '/route-config/tacos',
		linkName: 'Tacos',
		routes: [
			{
				id: uuid(),
				path: '/route-config/tacos/bus',
				linkName: 'Bus',
			},
			{
				id: uuid(),
				path: '/route-config/tacos/cart',
				linkName: 'Cart',
			}
		]
	},
	{
		id: uuid(),
		path: '/route-config/sandwiches',
		linkName: 'Sandwichs'
	}
]

export default routes