// main code section =============================================================>
// declare constants
const joogleUsers = [
	{name: 'Dimych', age: 30}, // probably.. :)
	{name: 'Ekaterina', age: 18},
	{name: 'Sergey', age: 35},
	{name: 'Tanya', age: 18}
];
const specialMessage = 'Yandex круче! Но это не точно...';
const searchButton = getSearchButton();
const searchInput = getSearchInput();

searchButtonClick(searchButton, searchInput, specialMessage, joogleUsers);


// service section (logic) =======================================================>
function getSearchButton() {
	return document.querySelector('.search-window button');
}
function getSearchInput() {
	return document.querySelector('.search-window input');
}

function searchButtonClick(button, input, message, users) {
	// add event listner and create arrow func for click event
	button.addEventListener('click', () => {
		let searchInputText = input.value;
		// Task 4. If input value is 'google', alert special message. ============>
		// using .toLowerCase() to process 'Google' request as well 
		if (searchInputText.toLowerCase() === 'google') {			
			// Task 10. Alert has a 3 seconds delay. =============================>
			setTimeout(alertCallback(message, users), 3000);
		} else {
		// Task 3. Search button click displays input value in alert. ============>
			setTimeout(alertCallback(searchInputText, users), 3000);
		}	
		// setTimeout(() => input.value = '', 3010); // <= uncomment if u want to clear input field after request
	})
}
// alert callback function with closure, so it can be used as setTimeout callback argument
function alertCallback(message, users) {
	// closure
	return function() {
		// Task 5. Array joogleUsers was created. Display name of first user. ====>
		alert(`(Current user: ${users[0].name}) ${message}`);
	}
}

