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



// ————————————————————————————————————————————————————————————
// ————————————————————————————————————————————————————————————
// INITIALIZATION
// ————————————————————————————————————————————————————————————
// ————————————————————————————————————————————————————————————

let letter = document.querySelector(".letter-container");
let letterContent = document.querySelector(".letter-content");
let letterClose = document.querySelector(".letter-close");
let logo = document.querySelector(".logo");
let sidebar = document.querySelector(".sidebar");
let mobileControls = document.querySelector("#mobile-controls");
let mobileHamburger = document.querySelector(".mobile-hamburger");
let initialized = false;
function initialize() {
	letter.style.pointerEvents = "none";
	letterContent.style.transform = "translateX(-100%)";
	letterClose.style.transform = "translateX(100%)";
	setTimeout(() => {
		initialized = true;
		if (window.innerWidth > 800) {
			sidebar.dataset.active = "1";
		}
	}, 3000)
	setTimeout(() => {
		mobileControls.dataset.active = "1";
	}, 3000)
	setTimeout(() => {
		logo.dataset.transition = "1";
	}, 2000)
	setTimeout(() => {
		mapContainer.style.transform = "scale(1)";
	}, 3000)
	setTimeout(() => {
		mobileHamburger.dataset.active = "1";
	}, 3000)
}



// ————————————————————————————————————————————————————————————
// ————————————————————————————————————————————————————————————
// CATALOG
// ————————————————————————————————————————————————————————————
// ————————————————————————————————————————————————————————————

// Filter projects
let activeFilters = [];
let catalog = document.querySelector(".catalog");
let catalogItems = document.querySelectorAll(".catalog-item");
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

// Replace catalog icons with svg code
for (let catalogItem of catalogItems) {
	let img = catalogItem.querySelector(".catalog-item-img");
	if (img.dataset.glyph == "textile") {
		img.innerHTML = '<svg viewBox="0 0 282.49 282.49"><path d="m249.41,141.56c20.38-5.29,33.09-22.05,33.09-45.92,0-29.16-18.69-47.71-48.24-47.71-.12,0-.25,0-.37,0-5.53-20.1-22.33-32.26-46.26-32.26s-40.13,12.16-45.71,32.26c-.01,0-.03,0-.04,0-.3,0-.59.01-.88.02-.3,0-.6-.02-.9-.02-.12,0-.25,0-.37,0-5.53-20.1-22.33-32.26-46.26-32.26s-40.13,12.16-45.71,32.26c-.01,0-.03,0-.04,0C18.95,47.93,0,66.49,0,95.64c0,23.79,12.45,40.52,33.09,45.87C12.7,146.81,0,163.57,0,187.44c0,29.04,18.54,47.56,47.9,47.7,5.7,19.75,22.4,31.68,46.09,31.68s39.81-11.93,45.54-31.68c.36,0,.72.01,1.09.01.29,0,.57-.01.86-.02.19,0,.38.01.58.01,5.7,19.75,22.4,31.68,46.09,31.68s39.81-11.93,45.54-31.68c.36,0,.72.01,1.09.01,28.76,0,47.71-18.55,47.71-47.71,0-23.79-12.45-40.52-33.09-45.87Z"/></svg>';
	} else if (img.dataset.glyph == "installation") {
		img.innerHTML = '<svg viewBox="0 0 282.5 282.5"><path d="M235.1,95.9c0-0.4,0-0.7,0-1.1c0-28.8-18.6-47.7-47.7-47.7c-23.8,0-40.5,12.5-45.9,33.1 c-5.3-20.4-22.1-33.1-45.9-33.1c-29.2,0-47.7,18.7-47.7,48.2c0,0.1,0,0.2,0,0.4c-20.1,5.5-32.3,22.3-32.3,46.3 s12.2,40.1,32.3,45.7c0,0,0,0,0,0c0,28.8,18.5,47.7,47.7,47.7c23.8,0,40.5-12.4,45.9-33.1c5.3,20.4,22.1,33.1,45.9,33.1 c29,0,47.6-18.5,47.7-47.9c19.8-5.7,31.7-22.4,31.7-46.1S254.9,101.6,235.1,95.9L235.1,95.9z"/></svg>';
	} else if (img.dataset.glyph == "video") {
		img.innerHTML = '<svg viewBox="0 0 282.49 282.49"><path d="m48.38,180.09c-.29,2.47-.44,5.02-.44,7.67,0,28.76,18.55,47.71,47.71,47.71,2.6,0,5.11-.15,7.53-.44,1.44,1.79,3.01,3.54,4.73,5.26,20.33,20.33,46.85,20.62,67.47,0,1.71-1.71,3.28-3.46,4.7-5.24,2.37.28,4.82.43,7.36.43,29.15,0,47.71-18.69,47.71-48.24,0-2.38-.13-4.7-.38-6.94,1.88-1.48,3.72-3.12,5.52-4.91,20.62-20.62,20.52-46.95-.38-67.84-1.71-1.71-3.46-3.27-5.24-4.69.32-2.56.48-5.23.48-7.99,0-28.76-18.55-47.71-47.71-47.71-2.76,0-5.42.17-7.99.5-1.47-1.84-3.09-3.66-4.86-5.43-20.33-20.33-46.85-20.62-67.47,0-1.72,1.72-3.3,3.49-4.73,5.29-2.18-.23-4.43-.35-6.74-.35-29.15,0-47.71,18.69-47.71,48.24,0,2.2.11,4.33.32,6.41-2.06,1.59-4.08,3.36-6.05,5.33-20.62,20.62-20.52,46.95.37,67.84,1.88,1.88,3.82,3.59,5.79,5.13Z"/></svg>';
	} else if (img.dataset.glyph == "print") {
		img.innerHTML = '<svg viewBox="0 0 282.49 282.49"><path d="m269.46,77.62c0-39.39-25.41-65.35-65.35-65.35-32.59,0-55.51,17.05-62.83,45.32-7.25-27.92-30.21-45.32-62.9-45.32C38.45,12.27,13.03,37.86,13.03,78.34c0,32.3,17.09,55.56,45.26,62.89-28.17,7.27-45.26,30.45-45.26,63.64,0,39.39,25.41,65.35,65.35,65.35,32.59,0,55.51-17.05,62.83-45.32,7.25,27.92,30.21,45.32,62.9,45.32,39.93,0,65.35-25.59,65.35-66.07,0-32.3-17.09-55.56-45.26-62.89,28.17-7.27,45.26-30.45,45.26-63.64Z"/></svg>';
	} else if (img.dataset.glyph == "web") {
		img.innerHTML = '<svg viewBox="0 0 282.49 282.49"><path d="m204.11,12.27c-38.46,0-63.45,23.75-65.24,61.66h-.04c-39.58,0-64.89,25.15-65.34,65.01-37.11,2.01-60.47,27.13-60.47,65.94s25.41,65.35,65.35,65.35,64.89-25.15,65.34-65.01c35.68-1.94,58.65-25.24,60.36-61.53.01,0,.03,0,.04,0,39.93,0,65.35-25.59,65.35-66.07S244.05,12.27,204.11,12.27Z"/></svg>';
	}
}



// ————————————————————————————————————————————————————————————
// ————————————————————————————————————————————————————————————
// PROJECT VIEW
// ————————————————————————————————————————————————————————————
// ————————————————————————————————————————————————————————————

let projects;
fetch('catalog.json')
	.then((response) => response.json())
	.then((json) => {
		projects = json;
		for (let key of Object.keys(projects)) {
			populateMap(projects[key]);
		}
	});

let featuredProject = 0;
let projectContainer = document.querySelector(".project-container");
let projectContentImg = projectContainer.querySelector(".project-content-img");
let projectContentInfo = projectContainer.querySelector(".project-content-info");
let projectContentDescription = projectContainer.querySelector(".project-content-description");
let projectContentLinks = projectContainer.querySelector(".project-content-links");
let projectContentClose = projectContainer.querySelector(".project-content-close");
function projectOpen(id) {
	featuredProject = id;

	// Move player to correct location
	let targetPos = projects[id]['pos'];
	currentPos = getPosFromString(targetPos);
	resetPosition();

	// Map indicator update
	let mapIndicator = map.querySelector(`[data-pos="${targetPos}"] .map-indicator`);
	mapIndicator.dataset.visited = "1";

	// Bring in project details
	projectContainer.style.pointerEvents = "all";
	projectContentImg.style.transform = "translateY(0%)";
	projectContentInfo.style.transform = "translateY(0%)";
	projectContentClose.style.transform = "scale(1)";

	// Populate project content
	projectContentDescription.scrollTop = 0;
	let projectInfo = projects[id];
	projectContentImg.style.backgroundImage = `url("assets/photos/${projectInfo["img"]}")`;
	projectContentDescription.innerHTML = `
		<p class="project-content-credits"><strong>${projectInfo["artist"]}</strong><br>
		<em>${projectInfo["piece"]}</em></p>
		${projectInfo["desc"]}
	`
	projectContentLinks.innerHTML = "";
	if (projectInfo["links"] == "") {
		projectContentLinks.style.display = "none";
	} else {
		projectContentLinks.style.display = "flex";
		for (let link of projectInfo["links"].split(",")) {
			let info = link.split(" ");
			projectContentLinks.innerHTML += `<a href="${info[1]}" target="_blank">${info[0]}</a>`
		}
	}
}
function projectClose() {
	featuredProject = 0;

	// Close project content
	projectContainer.style.pointerEvents = "none";
	projectContentImg.style.transform = "translateY(-100%)";
	projectContentInfo.style.transform = "translateY(100%)";
	projectContentClose.style.transform = "scale(0)";
}



// ————————————————————————————————————————————————————————————
// ————————————————————————————————————————————————————————————
// EXHIBITION MAP
// ————————————————————————————————————————————————————————————
// ————————————————————————————————————————————————————————————

// Generate map grid
let mapContainer = document.querySelector(".map-container");
let map = document.querySelector(".map");
let totalCols = 42;
let totalRows = 19;
for (let row=0; row<totalRows; row++) {
	for (let col=0; col<totalCols; col++) {
		map.innerHTML += `<div data-pos="[${col},${row}]" class="map-cell"></div>`;
	}
}

// Set playable boundaries
function setBounds(x1, y1, x2, y2) {
	for (let posx=x1; posx<=x2; posx++) {
		for (let posy=y1; posy<=y2; posy++) {
			let target = map.querySelector(`[data-pos="[${posx},${posy}]"]`);
			target.dataset.offlimits = "1";
		}
	}
}
setBounds(0, 0, 3, 2);
setBounds(0, 3, 2, 6);
setBounds(0, 7, 1, 14);
setBounds(0, 13, 2, 18);
setBounds(6, 0, 7, 0);
setBounds(12, 0, 41, 2);
setBounds(12, 3, 35, 3);
setBounds(10, 4, 35, 10);
setBounds(39, 10, 41, 15);
setBounds(6, 18, 7, 18);
setBounds(34, 16, 34, 18);
setBounds(5, 11, 7, 13);
setBounds(12, 14, 28, 15);
setBounds(3, 17, 5, 18);

// Add clickable movement
let mapCells = map.querySelectorAll('.map-cell');
for (let cell of mapCells) {
	if (cell.dataset.offlimits != "1") {
		let targetPos = getPos(cell);
		cell.addEventListener("click", () => {
			currentPos = targetPos;
			resetPosition();
			checkProject();
			checkText();
			checkPhoto();
		});
	}
}

// Get x and y pos from cell string
function getPos(cell) {
	let targetPos = cell.dataset.pos.split(",");
	return [parseInt(targetPos[0].slice(1)), parseInt(targetPos[1].slice(0, -1))];
}
function getPosFromString(text) {
	let targetPos = text.split(",");
	return [parseInt(targetPos[0].slice(1)), parseInt(targetPos[1].slice(0, -1))];
}

// Set and reset position
let currentPos = [10, 1];
let scale = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--scale'));
let player = document.createElement("div");
player.classList.add("map-player");
window.addEventListener('resize', resetPosition);
function resetPosition() {
	scale = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--scale'));
	let targetCell = map.querySelector(`[data-pos="[${currentPos[0]},${currentPos[1]}]`);
	targetCell.appendChild(player);
	if (window.innerWidth > 800 && initialized == true) {
		sidebar.dataset.active = "1";
	}
	map.style.top = mapContainer.offsetHeight/2 - scale/2 - currentPos[1]*scale + "px";
	map.style.left = mapContainer.offsetWidth/2 - scale/2 - currentPos[0]*scale + "px";


	let trail = document.createElement("div");
	trail.classList.add("map-trail");
	if (targetCell.querySelector(".map-trail") == null) {
		targetCell.appendChild(trail);
	}
}
resetPosition();

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

// Move user player
function move(direction) {
	if (direction == 'up' && currentPos[1]-1 >= 0 && map.querySelector(`[data-pos="[${currentPos[0]},${currentPos[1]-1}]"]`).dataset.offlimits != "1") {
		currentPos = [currentPos[0], currentPos[1]-1];
		resetPosition();
	} else if (direction == 'down' && currentPos[1]+1 < totalRows && map.querySelector(`[data-pos="[${currentPos[0]},${currentPos[1]+1}]"]`).dataset.offlimits != "1") {
		currentPos = [currentPos[0], currentPos[1]+1];
		resetPosition();
	} else if (direction == 'left' && currentPos[0]-1 >= 0 && map.querySelector(`[data-pos="[${currentPos[0]-1},${currentPos[1]}]"]`).dataset.offlimits != "1") {
		currentPos = [currentPos[0]-1, currentPos[1]];
		resetPosition();
	} else if (direction == 'right' && currentPos[0]+1 < totalCols && map.querySelector(`[data-pos="[${currentPos[0]+1},${currentPos[1]}]"]`).dataset.offlimits != "1") {
		currentPos = [currentPos[0]+1, currentPos[1]];
		resetPosition();
	}
	checkProject();
	checkText();
	checkPhoto();
}

// Check if current position is on a project
function checkProject() {
	let keys = Object.keys(projectPositions);
	let pos = `[${currentPos[0]},${currentPos[1]}]`;
	if (keys.includes(pos)) {
		projectOpen(projectPositions[pos]);
	} else {
		projectClose();
	}
}

// Populate map
let projectPositions = {}
function populateMap(project) {
	let indicator = document.createElement("div");
	indicator.classList.add("map-indicator");
	indicator.style.animation = `map-player ${Math.random()+1}s ease-in-out alternate infinite`;
	let projectID = project["id"];
	let projectType = project["category"];
	if (projectType == "textile") {
		indicator.innerHTML = '<svg viewBox="0 0 282.49 282.49"><path d="m249.41,141.56c20.38-5.29,33.09-22.05,33.09-45.92,0-29.16-18.69-47.71-48.24-47.71-.12,0-.25,0-.37,0-5.53-20.1-22.33-32.26-46.26-32.26s-40.13,12.16-45.71,32.26c-.01,0-.03,0-.04,0-.3,0-.59.01-.88.02-.3,0-.6-.02-.9-.02-.12,0-.25,0-.37,0-5.53-20.1-22.33-32.26-46.26-32.26s-40.13,12.16-45.71,32.26c-.01,0-.03,0-.04,0C18.95,47.93,0,66.49,0,95.64c0,23.79,12.45,40.52,33.09,45.87C12.7,146.81,0,163.57,0,187.44c0,29.04,18.54,47.56,47.9,47.7,5.7,19.75,22.4,31.68,46.09,31.68s39.81-11.93,45.54-31.68c.36,0,.72.01,1.09.01.29,0,.57-.01.86-.02.19,0,.38.01.58.01,5.7,19.75,22.4,31.68,46.09,31.68s39.81-11.93,45.54-31.68c.36,0,.72.01,1.09.01,28.76,0,47.71-18.55,47.71-47.71,0-23.79-12.45-40.52-33.09-45.87Z"/></svg>';
	} else if (projectType == "installation") {
		indicator.innerHTML = '<svg viewBox="0 0 282.5 282.5"><path d="M235.1,95.9c0-0.4,0-0.7,0-1.1c0-28.8-18.6-47.7-47.7-47.7c-23.8,0-40.5,12.5-45.9,33.1 c-5.3-20.4-22.1-33.1-45.9-33.1c-29.2,0-47.7,18.7-47.7,48.2c0,0.1,0,0.2,0,0.4c-20.1,5.5-32.3,22.3-32.3,46.3 s12.2,40.1,32.3,45.7c0,0,0,0,0,0c0,28.8,18.5,47.7,47.7,47.7c23.8,0,40.5-12.4,45.9-33.1c5.3,20.4,22.1,33.1,45.9,33.1 c29,0,47.6-18.5,47.7-47.9c19.8-5.7,31.7-22.4,31.7-46.1S254.9,101.6,235.1,95.9L235.1,95.9z"/></svg>';
	} else if (projectType == "video") {
		indicator.innerHTML = '<svg viewBox="0 0 282.49 282.49"><path d="m48.38,180.09c-.29,2.47-.44,5.02-.44,7.67,0,28.76,18.55,47.71,47.71,47.71,2.6,0,5.11-.15,7.53-.44,1.44,1.79,3.01,3.54,4.73,5.26,20.33,20.33,46.85,20.62,67.47,0,1.71-1.71,3.28-3.46,4.7-5.24,2.37.28,4.82.43,7.36.43,29.15,0,47.71-18.69,47.71-48.24,0-2.38-.13-4.7-.38-6.94,1.88-1.48,3.72-3.12,5.52-4.91,20.62-20.62,20.52-46.95-.38-67.84-1.71-1.71-3.46-3.27-5.24-4.69.32-2.56.48-5.23.48-7.99,0-28.76-18.55-47.71-47.71-47.71-2.76,0-5.42.17-7.99.5-1.47-1.84-3.09-3.66-4.86-5.43-20.33-20.33-46.85-20.62-67.47,0-1.72,1.72-3.3,3.49-4.73,5.29-2.18-.23-4.43-.35-6.74-.35-29.15,0-47.71,18.69-47.71,48.24,0,2.2.11,4.33.32,6.41-2.06,1.59-4.08,3.36-6.05,5.33-20.62,20.62-20.52,46.95.37,67.84,1.88,1.88,3.82,3.59,5.79,5.13Z"/></svg>';
	} else if (projectType == "print") {
		indicator.innerHTML = '<svg viewBox="0 0 282.49 282.49"><path d="m269.46,77.62c0-39.39-25.41-65.35-65.35-65.35-32.59,0-55.51,17.05-62.83,45.32-7.25-27.92-30.21-45.32-62.9-45.32C38.45,12.27,13.03,37.86,13.03,78.34c0,32.3,17.09,55.56,45.26,62.89-28.17,7.27-45.26,30.45-45.26,63.64,0,39.39,25.41,65.35,65.35,65.35,32.59,0,55.51-17.05,62.83-45.32,7.25,27.92,30.21,45.32,62.9,45.32,39.93,0,65.35-25.59,65.35-66.07,0-32.3-17.09-55.56-45.26-62.89,28.17-7.27,45.26-30.45,45.26-63.64Z"/></svg>';
	} else if (projectType == "web") {
		indicator.innerHTML = '<svg viewBox="0 0 282.49 282.49"><path d="m204.11,12.27c-38.46,0-63.45,23.75-65.24,61.66h-.04c-39.58,0-64.89,25.15-65.34,65.01-37.11,2.01-60.47,27.13-60.47,65.94s25.41,65.35,65.35,65.35,64.89-25.15,65.34-65.01c35.68-1.94,58.65-25.24,60.36-61.53.01,0,.03,0,.04,0,39.93,0,65.35-25.59,65.35-66.07S244.05,12.27,204.11,12.27Z"/></svg>';
	}
	let targetPos = project["pos"];
	let targetNode = map.querySelector(`[data-pos="${targetPos}"]`);
	indicator.addEventListener("mouseenter", () => {
		let catalogProject = catalog.querySelector(`[data-id="${projectID}"]`);
		catalogProject.classList.add('catalog-item-featured');
		catalog.scrollTop = catalogProject.offsetTop;
	})
	indicator.addEventListener("mouseleave", () => {
		let catalogProject = catalog.querySelector(`[data-id="${projectID}"]`);
		catalogProject.classList.remove('catalog-item-featured');
	})
	projectPositions[targetPos] = projectID;
	targetNode.appendChild(indicator);
}
function textOpen() {

}

// Populate text content
let textContainer = document.querySelector(".text-container");
let textContent = document.querySelector(".text-content");
let textCloseBtn = document.querySelector(".text-close");
let textActive = "";
let texts = {
	// "[4,0]": `
	// 	Biennial credits
	// `,
	"[11,3]": `
		<p style="color:var(--white)">From the graduate students of Graphic Design:</p>
		<ol>
			<li>We stand in complete solidarity with our deeply valued custodians, groundskeepers, and movers, and support their right to fair, living wages.</li>
			<li>We will use our access to available resources to produce and disseminate posters, flyers, and other crucial materials created by strikers and student organizers.</li>
			<li>We demand that RISD Administration act in concrete accordance with the values of our community, and practice the tenets of equity and inclusion the Institution allegedly supports.</li>
		</ol>
		<p>As a collective, we are disappointed in the poor administrative decisions that have brought our education to a standstill and broken our trust. We call for transparent communication that clarifies the process of negotiations and ask that the decision makers come forward and address our community.</p>
		<p>With the opening of our Graduate Biennial, in lieu of traditional revelry, we offer our reception as gathering space in support of the needs of the ongoing strike.</p>
		<p>Please know that our biennial will also serve as an information hub throughout the duration of the strike. We will be offering printing services daily. All files can be uploaded to <a href="https://drive.google.com/drive/folders/1BICq0SuTfGvucfNcyM5Q8G5KSq4vTQIw?usp=share_link" target="_blank">this link.</a></p>
		<p>All printed materials will be available at the entrance of the Sol Koffler Gallery for the entire duration of the exhibition. Please spread the word that this space is intended for the larger public to learn of and support the ongoing strike efforts.</p>
		<p>Everyone deserves a living wage.</p>
		<p style="color:var(--white)">We stand with y’all—<br>GD MFA</p>
	`
}
function populateText() {
	let keys = Object.keys(texts);
	for (let i=0; i<keys.length; i++) {
		let indicator = document.createElement("div");
		indicator.classList.add("map-indicator");
		indicator.style.animation = `map-player ${Math.random()+1}s ease-in-out alternate infinite`;
		indicator.innerHTML = '<svg viewBox="0 0 1000 1000"><path d="m653.39,116.85h-306.79c-126.89,0-229.75,102.86-229.75,229.75v306.79c0,126.89,102.86,229.75,229.75,229.75h306.79c126.89,0,229.75-102.86,229.75-229.75v-306.79c0-126.89-102.86-229.75-229.75-229.75Zm65.41,244.43c-25.02-46.48-60.06-64.36-114.4-64.36-22.17,0-42.91,2.86-62.92,8.58v387.56l68.65,11.44v45.77h-220.24v-45.77l68.65-11.44v-387.56c-20.02-5.72-40.76-8.58-62.92-8.58-54.35,0-89.39,17.88-114.41,64.36l-48.62-8.58,54.34-102.97h426.18l54.34,102.97-48.63,8.58Z"/></svg>';
		let targetNode = map.querySelector(`[data-pos="${keys[i]}"]`);
		targetNode.appendChild(indicator);
	}
}
populateText();
function textOpen() {
	let text = texts[textActive];
	let indicator = map.querySelector(`[data-pos="${textActive}"] .map-indicator`);
	indicator.dataset.visited = "1";
	textContainer.style.pointerEvents = "all";
	textContent.style.transform = "translateX(0%)";
	textCloseBtn.style.transform = "scale(1)";
	textContent.innerHTML = text;
}
function textClose() {
	// Close text content
	textContainer.style.pointerEvents = "none";
	textContent.style.transform = "translateX(-100%)";
	textCloseBtn.style.transform = "scale(0)";
}
function checkText() {
	let keys = Object.keys(texts);
	let pos = `[${currentPos[0]},${currentPos[1]}]`;
	if (keys.includes(pos)) {
		textActive = pos;
		textOpen();
	} else {
		textClose();
	}
}

// Populate image content
let photoContainer = document.querySelector(".photo-container");
let photoContent = document.querySelector(".photo-content");
let photoCloseBtn = document.querySelector(".photo-close");
let photoActive = "";
let photos = {
	"[5,0]": `assets/photos/placeholder.svg`,
	"[5,1]": `assets/photos/placeholder.svg`
}
function populatePhotos() {
	let keys = Object.keys(photos);
	for (let i=0; i<keys.length; i++) {
		let indicator = document.createElement("div");
		indicator.classList.add("map-indicator");
		indicator.style.animation = `map-player ${Math.random()+1}s ease-in-out alternate infinite`;
		indicator.innerHTML = '<svg viewBox="0 0 421.1 421.1"><path d="M262.4,230.9c0,28.6-23.2,51.9-51.9,51.9s-51.9-23.2-51.9-51.9s23.2-51.9,51.9-51.9S262.4,202.3,262.4,230.9"/><path d="M120.3,91.4H74.1c-4.2,0-7.7,3.5-7.7,7.7c0,4.2,3.5,7.7,7.7,7.7h46.1c4.2,0,7.7-3.5,7.7-7.7 C127.9,94.9,124.5,91.4,120.3,91.4z"/><path d="M366.5,101.8h-80.6c-7.1,0-13.4-4.6-15.7-11.3L266,73.3c-2.4-7.3-9.2-12.2-16.8-12.2H172 c-7.7,0-14.4,4.9-16.8,12.2L151,90.5c-2.2,6.7-8.5,11.3-15.7,11.3H54.7c-15.8,0-28.5,12.8-28.5,28.5v201.1 c0,15.8,12.8,28.5,28.5,28.5h311.8c15.8,0,28.5-12.8,28.5-28.5V130.3C395,114.6,382.2,101.8,366.5,101.8L366.5,101.8L366.5,101.8z M98.2,151c-8.5,0-15.4-6.9-15.4-15.4s6.9-15.4,15.4-15.4s15.4,6.9,15.4,15.4S106.6,151,98.2,151z M210.6,313.5 c-45.6,0-82.6-37-82.6-82.6s37-82.6,82.6-82.6s82.6,37,82.6,82.6S256.2,313.5,210.6,313.5L210.6,313.5z"/></svg>';
		let targetNode = map.querySelector(`[data-pos="${keys[i]}"]`);
		targetNode.appendChild(indicator);
	}
}
populatePhotos();
function photoOpen() {
	let photo = photos[photoActive];
	let indicator = map.querySelector(`[data-pos="${photoActive}"] .map-indicator`);
	indicator.dataset.visited = "1";
	photoContainer.style.pointerEvents = "all";
	photoContent.style.transform = "translateX(0%)";
	photoCloseBtn.style.transform = "scale(1)";
	photoContent.style.backgroundImage = `url("${photo}")`;
}
function photoClose() {
	// Close photo content
	photoContainer.style.pointerEvents = "none";
	photoContent.style.transform = "translateX(-100%)";
	photoCloseBtn.style.transform = "scale(0)";
}
function checkPhoto() {
	let keys = Object.keys(photos);
	let pos = `[${currentPos[0]},${currentPos[1]}]`;
	if (keys.includes(pos)) {
		photoActive = pos;
		photoOpen();
	} else {
		photoClose();
	}
}

// ————————————————————————————————————————————————————————————
// ————————————————————————————————————————————————————————————
// MOBILE FUNCTIONS
// ————————————————————————————————————————————————————————————
// ————————————————————————————————————————————————————————————

function openSidebar() {
	sidebar.dataset.active = "1";
}
function closeSidebar() {
	sidebar.dataset.active = "0";
}

const documentHeight = () => {
	const doc = document.documentElement;
	doc.style.setProperty('--doc-height', `${window.innerHeight}px`);
}
window.addEventListener("resize", documentHeight);
documentHeight();