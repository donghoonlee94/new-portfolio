/* eslint-disable no-undef */
describe('Main button test', () => {
	it('Click Button', () => {
		cy.visit('/');
		cy.get('[data-cy=testBtn]').click();
	});
});
