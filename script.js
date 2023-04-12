let body = document.querySelector("body");

// Mouse cursor
let cursor = document.querySelector(".cursor");
let cursorImg = document.querySelector(".cursor img");
window.addEventListener('mousemove', () => {
	let e = window.event;
	if (cursor.style.display != "block") {
		cursor.style.display = "block";
	}
	cursor.style.top = e.pageY + "px";
	cursor.style.left = e.pageX + "px";
});
window.addEventListener('mousedown', () => {
	cursorImg.style.transform = "scale(.5)";
});
window.addEventListener('mouseup', () => {
	cursorImg.style.transform = "scale(1)";
});

// Generate map grid
let mapContainer = document.querySelector(".map-container");
let map = document.querySelector(".map");
for (let col=0; col<10; col++) {
	for (let row=0; row<10; row++) {
		map.innerHTML += `<div dataset-pos="[${col},${row}]"></div>`;
	}
}

// Arrow key controls
body.addEventListener("keydown", checkKey);
function checkKey(e) {
    e = e || window.event;
    if (e.keyCode == '38') { // up arrow
		move('up');
		buttonPress('up');
    }
    else if (e.keyCode == '40') { // down arrow
		move('down');
		buttonPress('down');
    }
    else if (e.keyCode == '37') { // left arrow
		move('left');
		buttonPress('left');
    }
    else if (e.keyCode == '39') { // right arrow
		move('right');
		buttonPress('right');
    }
}

// Press buttons if arrow keys used
function buttonPress(direction) {
	let button = document.querySelector(`#controls-${direction}`);
	button.dataset.toggle = "1";
	setTimeout(() => {
		button.dataset.toggle = "0";
	}, 100);
}

// Set initial position
let currentPos = [0, 0];
map.style.top = mapContainer.offsetHeight/2 - 50 + "px";
map.style.left = mapContainer.offsetWidth/2 - 50 + "px";

// Fix position if resized
window.addEventListener('resize', () => {
	map.style.top = mapContainer.offsetHeight/2 - 50 - currentPos[0]*100 + "px";
	map.style.left = mapContainer.offsetWidth/2 - 50 - currentPos[1]*100 + "px";
});

// Move user player
document.querySelector(`[dataset-pos="[0,0]`).innerHTML = '<div class="map-player"></div>';
function move(direction) {
	let player = document.querySelector(".map-player");
	player.remove();
	if (direction == 'up' && currentPos[0]-1 >= 0) {
		currentPos = [currentPos[0]-1, currentPos[1]];
		map.style.top = parseInt(map.style.top) + 100 + "px";
	} else if (direction == 'down' && currentPos[0]+1 < 10) {
		currentPos = [currentPos[0]+1, currentPos[1]];
		map.style.top = parseInt(map.style.top) - 100 + "px";
	} else if (direction == 'left' && currentPos[1]-1 >= 0) {
		currentPos = [currentPos[0], currentPos[1]-1];
		map.style.left = parseInt(map.style.left) + 100 + "px";
	} else if (direction == 'right' && currentPos[1]+1 < 10) {
		currentPos = [currentPos[0], currentPos[1]+1];
		map.style.left = parseInt(map.style.left) - 100 + "px";
	}
	let targetPos = document.querySelector(`[dataset-pos="[${currentPos}]"`)
	targetPos.innerHTML = '<div class="map-player"></div>';
}

// Filter projects
let activeFilters = [];
let catalog = document.querySelector(".catalog");
function filter(e, category) {
	if (e.dataset.active != "1") {
		activeFilters.push(category);
		e.dataset.active = "1";
	} else {
		activeFilters = activeFilters.filter(e => e !== category);
		e.dataset.active = "0";
	}
	updateCatalog();
}
function updateCatalog() {
	let catalogItems = document.querySelectorAll(".catalog-item");
	if (activeFilters.length > 0) {
		for (let item of catalogItems) {
			item.style.display = "none";
		}
		for (let filter of activeFilters) {
			let filteredItems = catalog.querySelectorAll(`[data-category='${filter}'`);
			for (let item of filteredItems) {
				item.style.display = "flex";
			}
		}
	} else {
		for (let item of catalogItems) {
			item.style.display = "flex";
		}
	}
}