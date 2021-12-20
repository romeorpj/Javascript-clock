// select hands from dom

let sHand = document.querySelector(".sh");
let mHand = document.querySelector(".mh");
let hHand = document.querySelector(".hh");
let time2 = new Date();
// Come back and add an am/pm indicator***

// Create clock function and time object
let clock2Function = () => {
	let time2 = new Date();
	let second2 = time2.getSeconds() / 60;
	let minute2 = (second2 + time2.getMinutes()) / 60;
	let hour2 = (minute2 + time2.getHours()) / 12;

	// rotate hands;
	rotateFunc(hHand, hour2);
	rotateFunc(mHand, minute2);
	rotateFunc(sHand, second2);
};

// rotate function
let rotateFunc = (element, degrees) => {
	// element.setProperty("--hh-rotate", "30deg");
	element.style.setProperty("--rotate", degrees * 360);
};

clock2Function();
document.addEventListener("DOMContentLoaded", clock2Function);
setInterval(clock2Function, 1000);
