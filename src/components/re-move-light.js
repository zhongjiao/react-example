var id = '';
// var remToPx = parseFloat(window.getComputedStyle(document.getElementsByTagName('html')[0], '').getPropertyValue('font-size'));

export const addLight = (e, options) => {

	let light = document.createElement('div');

	id = (options && options.id) || 'light'
	light.id = id;

	let top = options.currentTarget.getBoundingClientRect().top;
	let styleObject = {
		position: 'absolute',
		borderRadius: '50%',
		width: (options && options.width) || '10rem',
		height: (options && options.height) || '10rem',
		transform: 'translate3d(-50%, -50%, 0)',
		background: 'radial-gradient(ellipse at center, rgba(238,238,238,.3) 0%, rgba(238, 238, 238,0) 50%)'
	}
	let el = getEle();

	styleObject.top = e.pageY - top + 'px';
	styleObject.left = e.pageX + 'px';
	// styleObject.top = (e.pageY - (parseFloat(styleObject.height) / 2 + 1.5) * remToPx) + 'px';
	// styleObject.left = (e.pageX - parseFloat(styleObject.width) * remToPx * 100 / 200) + 'px';

	if (!findEle()) {
		for (let prop of Object.keys(styleObject)) {
			light.style[prop] = styleObject[prop];
		}
		options.currentTarget.appendChild(light);
	} else {
		el.style.top = styleObject.top;
		el.style.left = styleObject.left;
	}
}

export const removeLight = (el) => {
	if (findEle()) el.removeChild(getEle());
}

function findEle() {
	return getEle() ? true : false;
}

function getEle() {
	return  document.getElementById(id);
}