let to;

function toSlideMenu(width, paddingLeft) {
	if (width === '0') {
		clearTimeout(to);
	}
	document.getElementById('side-menu').style.width = width;
	document.getElementById('container').style.paddingLeft = paddingLeft;
}

function slideMenu(width, paddingLeft) {
	toSlideMenu(width, paddingLeft);
	if (width !== '0') {
		to = setTimeout(toSlideMenu, 5000, '0', '0');
	}
}
