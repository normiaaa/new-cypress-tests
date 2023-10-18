describe('Test API', () => {
	it('Get contact list', () => {
		cy.fixture('contactListResponse.json').then(dataToCompare => {
			cy.getToken().then(token => {
				cy.request({
					method: 'GET',
					url: 'https://thinking-tester-contact-list.herokuapp.com/contacts',
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}).then(data => {
					expect(dataToCompare).to.deep.equal(data.body);
					console.log(dataToCompare);
				});
			});
		});
	});
});
