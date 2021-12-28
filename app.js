let myRange = document.getElementById('myRange');
const price10 = document.getElementById('price10');
const price9 = document.getElementById('price9');
const price8 = document.getElementById('price8');
const contactUs = document.getElementById('contact-us');

myRange.addEventListener('input', function () {
	// document.getElementById('myRangeValue').innerHTML = myRange.value;

	if (myRange.value < 50 && myRange.value > 25) {
		myRange.value = 25;
	} else if (myRange.value < 25 && myRange.value > 1) {
		myRange.value = 1;
	} else if (myRange.value > 50 && myRange.value < 75) {
		myRange.value = 75;
	} else if (myRange.value > 75 && myRange.value < 100) {
		myRange.value = 100;
	}

	if (myRange.value == 1) {
		price10.classList.add('show-price');
	} else if (myRange.value == 25) {
		price9.classList.add('show-price');
	} else if (myRange.value == 75) {
		price8.classList.add('show-price');
	} else if (myRange.value == 100) {
		contactUs.classList.add('show-price');
	} else {
		price10.classList.remove('show-price');
		price9.classList.remove('show-price');
		price8.classList.remove('show-price');
		contactUs.classList.remove('show-price');
	}
});
