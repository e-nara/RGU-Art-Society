window.onload = function() {

	//Get the button elements
	const buttons = document.getElementsByClassName("btn");
				
	//Assign event listeners to the button elements
	for(let i = 0; i < buttons.length; i++) {
		buttons[i].addEventListener("click", changeImages);
	}


	function changeImages(e) {
		
		//Reset any highlighted buttons back to their original color
		for(let i = 0; i < buttons.length; i++) {
			buttons[i].style.backgroundColor = "#5FAFE1";
		}
					
		//Get the element of the button that was clicked and highlight it
		document.getElementById(e.target.id).style.backgroundColor = "#2C66C4";
					
		//Get all the image elements from the image gallary
		const image = document.getElementsByClassName("ImageGallery");
						
		//Swap the images in the image gallery according to what button was clicked
		for(let i = 0; i < image.length; i++) {
			image[i].src = `images\\image${i + ((e.target.id * 12) - 12) + 1}.png`;
			image[i].alt = `Image${i + ((e.target.id * 12) - 12) + 1}`;	
		}
	}
}
