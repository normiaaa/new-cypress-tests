describe('Test API', () => {
	before(() => {
		// cy.loginViaAPI();
	});
	it('Add a New Contact Via API', () => {
		cy.fixture('addnewContact.json').then(data => {
			cy.getToken().then(token => {
				cy.request({
					url: 'https://thinking-tester-contact-list.herokuapp.com/contacts',
					headers: {
						Authorization: `Bearer ${token}`,
					},
					method: 'POST',
					body: {
						...data,
					},
				});
			});
		});
	});
});
