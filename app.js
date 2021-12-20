// get numbers from dom
let clockHours = document.querySelector(".clock__face__hour");
let clockMinutes = document.querySelector(".clock__face__minute");
let clockAmPm = document.querySelector(".clock__face__ampm");

let clockFunction = () => {
	// get current hour
	// if military time subtract 12 hours else display current hour
	const hour = new Date().getHours();
	hour > 12
		? (clockHours.textContent = hour - 12)
		: (clockHours.textContent = hour);
	// If clock is between 12 hundred hours and less than 2300 hours
	// display Pm / else display Am
	hour > 12 || hour < 24
		? (clockAmPm.textContent = "pm")
		: (clockAmPm.textContent = "am");
	// get and display current minutes
	// apparently single digit numbers are only single digits(no zero)
	// so if minutes are less than 10 add a 0 to the front
	const minutes = new Date().getMinutes();
	minutes < 10
		? (clockMinutes.textContent = `0${minutes}`)
		: (clockMinutes.textContent = minutes);

	// Create slide animation

	// minutes.classList.add(".slide");

	// console.log(`${hour}:${minutes} PM`);

	// clockMinutes.style.transform = `rotate(${minutes * 6}deg)`;
	// clockHours.style.transform = `rotate(${hour * 30 + minutes * 0.5}deg)`;
};

// loads clocklFunction on page load
// updates clock function with new on-screen time every second
document.addEventListener("DOMContentLoaded", clockFunction);
setInterval(clockFunction, 1000);
