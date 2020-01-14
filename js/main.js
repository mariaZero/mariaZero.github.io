document.addEventListener("DOMContentLoaded",()=>{
	"use strict";
		const btnExit = document.getElementById("btnExit"),
		menu = document.getElementById("menu"),
		btnOpen = document.getElementById("btnOpen");
		

		btnOpen.addEventListener("click",()=>{
			btnOpen.style.display="none";
			menu.style.display="inline-block"
		});
		btnExit.addEventListener("click", () => {
		
		menu.style.display = "none"
		btnOpen.style.display = "block";
	});

});

