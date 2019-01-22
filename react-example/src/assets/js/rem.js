(function(w) {
	let designWidth = 750;
	let designHeight = 1200;
	let rootRem = 50;

	const html = document.getElementsByTagName('html')[0];
	let deviceWidth = html.clientWidth;
	let deviceHeight = html.clientHeight;
	let rootFontSize;
	let clientWidth;

	if (deviceWidth < designWidth) {
		clientWidth = deviceWidth;
	} else {
		clientWidth = deviceHeight * designWidth / designHeight;
	}

	rootFontSize = rootRem * clientWidth / designWidth;
	html.style.fontSize = rootFontSize + 'px';
})(window);