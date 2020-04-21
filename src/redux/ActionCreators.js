import { baseUrl } from '../shared/baseUrl';

export const postForm1 = (email, password, confirmPassword) => (dispatch) => {

	const newForm = {
		email: email,
		password: password,
		confirmPassword: confirmPassword
	};

	return fetch(baseUrl + 'basic-data', {
		method: 'POST',
		body: JSON.stringify(newForm),
		headers: {
			'Content-Type': 'application/json'
		},
		credentials: 'same-origin'
	})
		.then(response => {
			if (response.ok) {
				return response;
			}
			else {
				var error = new Error('Error ' + response.status + ': ' + response.statusText);
				error.response = response;
				throw error;
			}
		}, 
		error => {
			var errmess = new Error(error.message);
			throw errmess;
		})
		.then(response => response.json())
		.then(response => { alert(JSON.stringify(response));})
		.catch(error => { console.log('Post Form1 ', error.message)
			alert('Your information could not be saved\nError: '+ error.message); })
}

export const postForm2 = (firstname, lastname, address, postal, country) => (dispatch) => {

	const newForm = {
		firstname: firstname,
		lastname: lastname,
		address: address,
		postal: postal,
		country: country
	};

	return fetch(baseUrl + 'basic-data', {
		method: 'POST',
		body: JSON.stringify(newForm),
		headers: {
			'Content-Type': 'application/json'
		},
		credentials: 'same-origin'
	})
		.then(response => {
			if (response.ok) {
				return response;
			}
			else {
				var error = new Error('Error ' + response.status + ': ' + response.statusText);
				error.response = response;
				throw error;
			}
		}, 
		error => {
			var errmess = new Error(error.message);
			throw errmess;
		})
		.then(response => response.json())
		.then(response => { alert(JSON.stringify(response));})
		.catch(error => { console.log('Post Form1 ', error.message)
			alert('Your information could not be saved\nError: '+ error.message); })
}