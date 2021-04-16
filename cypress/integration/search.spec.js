describe('جستجو', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('جستجو ', function () {
        cy.get('input[value="twoWay"]').check({force: true})
        cy.get('input[placeholder="مبدا"').type('تهران')
        cy.get('.input-pair').contains('تهران').click()
        cy.get('input[placeholder="مقصد"').type('مشهد')
        cy.get('.input-pair').contains('li.hover','مشهد').click()
        cy.get('.calendar__container').contains('29').click()
        cy.get('.calendar__container').contains('31').click()
        cy.get('.alibaba-datepicker__footer').contains('تایید').click()
        cy.get('.px-1').find('div').find('span').first().click()
        cy.get('.px-1').find('div').find('span').first().click()
        cy.get('.px-1').find('div').find('span').first().click()
        cy.get('.px-1').find('div').find('span').first().click()
    });

})