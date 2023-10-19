// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// const cypress = require('cypress');

//This command would be used for LogIn in via API

Cypress.Commands.add('loginViaAPI', () => {
	cy.session('user', () => {
		cy.request({
			url: 'https://thinking-tester-contact-list.herokuapp.com/users/login',
			method: 'POST',
			body: {
				email: 'normiaaa@gmail.com',
				password: 'test1234',
			},
		});
	});
});

//This command will be used for getting the token

Cypress.Commands.add('getToken', () => {
	cy.request({
		url: 'https://thinking-tester-contact-list.herokuapp.com/users/login',
		method: 'POST',
		body: {
			email: 'normiaaa@gmail.com',
			password: 'test1234',
		},
	}).then(data => {
		return data.body.token;
	});
});

//r This command would be used for LogIn via UI

Cypress.Commands.add('loginViaUi', user => {
	cy.session(user, () => {
		cy.visit(Cypress.env('api_server'));
		cy.get('#email').type(user.email);
		cy.get('#password').type(user.password);
		cy.get('#submit').click();
		cy.url().should('include', 'contactList');
	});
});
