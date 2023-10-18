describe('Test the various elements', () => {
	beforeEach(() => {
		cy.visit('https://letcode.in/test');
		cy.get('.fc-cta-do-not-consent > .fc-button-label').click();
	});

	it('Test the inputs', () => {
		cy.get(
			':nth-child(2) > .hero-body > div.container > .columns > :nth-child(1) > app-menu > .card > .card-footer > .card-footer-item',
		)
			.should('be.visible')
			.click();
		cy.get('#fullName').should('be.visible').type('Test Test');
		cy.get('#join').should('be.visible').and('have.value', 'I am good');
		cy.get('#getMe').should('be.visible').and('have.value', 'ortonikc');
		cy.get('#clearMe').should('be.visible').clear();
		cy.get('#noEdit').should('be.visible').and('be.disabled');
		cy.get('#dontwrite').should('be.visible').and('have.attr', 'readonly');
		cy.go('back');
	});

	it('Test the dropdowns', () => {
		cy.get(
			':nth-child(2) > .hero-body > div.container > .columns > :nth-child(3) > app-menu > .card > .card-footer > .card-footer-item',
		)
			.should('exist')
			.click();
		cy.get('#fruits').should('be.visible').select('Apple');
		cy.get('.notification').should('be.visible').and('include.text', 'You have selected Apple');
		cy.get('#superheros').should('be.visible').select('Batman');
		cy.get('.notification').should('be.visible').and('include.text', 'Batman');
		cy.get('#lang').should('be.visible').select('C#');
		cy.get('#country').should('be.visible').select('India');
	});

	it('Test the form', () => {
		cy.get(
			':nth-child(8) > .hero-body > div.container > .columns > :nth-child(2) > app-menu > .card > .card-footer > .card-footer-item',
		)
			.should('exist')
			.click();

		cy.get('#firstname').should('be.visible').type('Test');
		cy.get('#lasttname').should('be.visible').type('Testing');
		cy.get('#email').should('be.visible').clear().type('test@test.com');
		cy.get(':nth-child(2) > :nth-child(2) > .field > .control > .select > select')
			.should('be.visible')
			.select('Romania (+40)');
		cy.get('#Phno').should('be.visible').type('1234567890');
		cy.get('#Addl1').should('be.visible').type('Addr 1');
		cy.get('#Addl2').should('be.visible').type('Addr 2');
		cy.get('#state').should('be.visible').type('AZ');
		cy.get('#postalcode').should('be.visible').type('1234');
		cy.get(':nth-child(5) > :nth-child(2) > .field > .control > .select > select')
			.should('be.visible')
			.select('Romania');
		cy.get('#Date').should('be.visible').type('1995-12-10');
		cy.get('#female').should('be.visible').check();
		cy.get('.checkbox > input').should('be.visible').check();
		cy.get('.control > .button').should('be.visible').click();
	});

	it('Upload a file ', () => {
		cy.get(
			':nth-child(8) > .hero-body > div.container > .columns > :nth-child(3) > app-menu > .card > .card-footer > .card-footer-item',
		)
			.should('exist')
			.click();

		cy.get('input[type=file]').selectFile('cypress/fixtures/uploadText.json', { force: true });
	});
});
