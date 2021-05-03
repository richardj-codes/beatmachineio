let q = document.querySelector(".q");
let w = document.querySelector(".w");
let e = document.querySelector(".e");
let a = document.querySelector(".a");
let s = document.querySelector(".s");
let d = document.querySelector(".d");
let z = document.querySelector(".z");
let x = document.querySelector(".x");
let c = document.querySelector(".c");

// MOUSECLICKS
// let arr = [q, w, e, a, s, d, z, x, c];

let allButtons = document.querySelectorAll(".push-btn");

for (let i = 0; i < allButtons.length; i++) {
	allButtons[i].addEventListener("click", () => {
		keyBoardSoundz(allButtons[i]);
	});
}

// KEYBOARD KEY PRESS
document.addEventListener("keydown", (event) => {
	console.log(event.key);
	// keyBoardSoundz(event.key);
	switch (event.key) {
		case "q":
			let sound1 = new Audio("/sounds/RD_C_7.wav");
			sound1.play();
			break;
		case "w":
			let sound2 = new Audio("/sounds/RD_C_HH_4.wav");
			sound2.play();
			break;
		case "e":
			let sound3 = new Audio("/sounds/RD_K_5.wav");
			sound3.play();
			break;
		case "a":
			let sound4 = new Audio("/sounds/RD_P_SB_1.wav");
			sound4.play();
			break;
		case "s":
			let sound5 = new Audio("/sounds/RD_S_P_5.wav");
			sound5.play();
			break;
		case "d":
			let sound6 = new Audio("/sounds/RD_T_FT_2.wav");
			sound6.play();
			break;
		case "z":
			let sound7 = new Audio("/sounds/RD_T_HT_1.wav");
			sound7.play();
			break;
		case "x":
			let sound8 = new Audio("/sounds/RD_T_HT_7.wav");
			sound8.play();
			break;
		case "c":
			let sound9 = new Audio("/sounds/RD_T_MT_1.wav");
			sound9.play();
			break;

		default:
			alert("Please Click Q,W,E,A,S,D,Z,X,C");
			break;
	}
});

let keyBoardSoundz = (clicks) => {
	switch (clicks) {
		case q:
			let sound1 = new Audio("/sounds/RD_C_7.wav");
			sound1.play();
			break;
		case w:
			let sound2 = new Audio("/sounds/RD_C_HH_4.wav");
			sound2.play();
			break;
		case e:
			let sound3 = new Audio("/sounds/RD_K_5.wav");
			sound3.play();
			break;
		case a:
			let sound4 = new Audio("/sounds/RD_P_SB_1.wav");
			sound4.play();
			break;
		case s:
			let sound5 = new Audio("/sounds/RD_S_P_5.wav");
			sound5.play();
			break;
		case d:
			let sound6 = new Audio("/sounds/RD_T_FT_2.wav");
			sound6.play();
			break;
		case z:
			let sound7 = new Audio("/sounds/RD_T_HT_1.wav");
			sound7.play();
			break;
		case x:
			let sound8 = new Audio("/sounds/RD_T_HT_7.wav");
			sound8.play();
			break;
		case c:
			let sound9 = new Audio("/sounds/RD_T_MT_1.wav");
			sound9.play();
			break;

		default:
			alert("Please Click Q,W,E,A,S,D,Z,X,C");
			break;
	}
};
