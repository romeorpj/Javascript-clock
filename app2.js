// Add media query

// select hands from dom
let sHand = document.querySelector(".sh");
let mHand = document.querySelector(".mh");
let hHand = document.querySelector(".hh");
let period = document.querySelector(".period");
let time2 = new Date();

// Create clock function and time object
let second2, minute2, hour2;

let clock2Function = () => {
	// min and seconds times 6 = 6*60 = 360deg

	let time2 = new Date();
	second2 = time2.getSeconds();
	minute2 = time2.getMinutes();
	hour2 = time2.getHours();

	hour2Deg = hour2 * 30 + minute2 * 0.5;
	hour2 > 12 ? (period.textContent = "pm") : (period.textContent = "am");

	// rotate hands
	sHand.style.transform = `rotate(${second2 * 6}deg)`;
	mHand.style.transform = `rotate(${minute2 * 6}deg)`;
	hHand.style.transform = `rotate(${hour2Deg}deg)`;
};

document.addEventListener("DOMContentLoaded", clock2Function);
setInterval(clock2Function, 1000);
