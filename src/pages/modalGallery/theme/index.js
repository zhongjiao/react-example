let uuid = () => Math.random().toString(16).substring(2,8)
const Theme = [
	{ id: uuid(), title: "Dark Orchid", color: "DarkOrchid" },
  { id: uuid(), title: "Lime Green", color: "LimeGreen" },
  { id: uuid(), title: "Tomato", color: "Tomato" },
  { id: uuid(), title: "Seven Ate Nine", color: "#789" },
  { id: uuid(), title: "Crimson", color: "Crimson" }
]

export default Theme