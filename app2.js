// select hands from dom

let sHand = document.querySelector(".sh");
let mHand = document.querySelector(".mh");
let hHand = document.querySelector(".hh");
let period = document.querySelector(".period");
let time2 = new Date();
// Come back and add an am/pm indicator***

// Create clock function and time object
let second2, minute2, hour2;
let clock2Function = () => {
	// min and seconds times 6 = 6*60 = 360deg
	// hour is 12 times 30 = 360deg
	let time2 = new Date();
	second2 = time2.getSeconds() * 6;
	minute2 = time2.getMinutes() * 6;
	hour2 = time2.getHours();
	hour2Deg = hour2 * 30 + (second2 * 300) / 43200;
	hour2 > 12 ? (period.textContent = "pm") : (period.textContent = "am");

	// rotate hands
	sHand.style.transform = `rotate(${second2}deg)`;
	mHand.style.transform = `rotate(${minute2}deg)`;
	hHand.style.transform = `rotate(${hour2Deg}deg)`;
};

// rotate function
// original idea was going to update custom property
// but i found an easier way

// let rotateFunc = (element, degrees) => {
// 	// element.setProperty("--hh-rotate", "30deg");
// 	element.style.setProperty("--rotate", degrees * 360);
// };

// domcontentloaded so the clock starts on the right time as soon as the page loads
document.addEventListener("DOMContentLoaded", clock2Function);
setInterval(clock2Function, 1000);
