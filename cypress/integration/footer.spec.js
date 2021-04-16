describe('علی بابا فوتر', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('درباره ما', () => {
        cy.contains('درباره ما').click()
        cy.url().should('include', '/about-us')
    })

    it('تماس با ما', () => {
        cy.contains('تماس با ما').click({force: true})
        cy.url().should('include', '/contact-us')
    })

    it('چرا علی بابا', () => {
        cy.contains('چرا علی‌بابا').click()
        cy.url().should('include', '/why-alibaba')
    })

    it('باشگاه مشتریان', () => {
        cy.contains('باشگاه مشتریان').click()
        cy.url().should('include', '/loyalty')
    })

    it('فروش سازمانی', () => {
        cy.contains('فروش سازمانی').click()
        cy.url().should('include', '/b2b')
    })

    it('قوانین و مقررات', () => {
        cy.contains('قوانین و مقررات').click({force: true})
        cy.url().should('include', '/policy')
    })

    it('راهنمای خرید', () => {
        cy.contains('راهنمای خرید').click({force: true})
        cy.url().should('include', '/purchase-guide')
    })

    it('پرسش و پاسخ', () => {
        cy.contains('پرسش و پاسخ').click({force: true})
        cy.url().should('include', '/faq')
    })

    it('مجله علی‌بابا', () => {
        cy.contains('مجله علی‌بابا').click({force: true})
        cy.get('a[href="https://www.alibaba.ir/mag/"]').should('have.attr', 'target', '_blank')
    })

    it('فرصت های شغلی', () => {
        cy.contains('فرصت‌های شغلی').click({force: true})
        cy.get('a[href="/jobs"]').should('have.attr', 'target', '_blank')
    })

    it('همکاری با آژانس‌ها', () => {
        cy.contains('همکاری با آژانس‌ها').click()
        cy.get('a[href="https://partner.alibaba.ir"]').should('have.attr', 'target', '_blank')
    })

    it('بلیط چارتر', () => {
        cy.contains('بلیط چارتر').click({force: true})
        cy.url().should('include', '/charter-ticket')
    })

    it('تور کیش', () => {
        cy.contains('تور کیش').click()
        cy.url().should('include', '/tour/iran-kish_island')
    })

    it('تور استانبول', () => {
        cy.contains('تور استانبول').click({force: true})
        cy.url().should('include', '/tour/turkey-istanbul')
    })

    it('راهنمای خرید بلیط قطار', () => {
        cy.contains('راهنمای خرید بلیط قطار').click()
        cy.url().should('include', '/purchase-guide?section=train')
    })

    it('راهنمای خرید بلیط اتوبوس', () => {
        cy.contains('راهنمای خرید بلیط اتوبوس').click()
        cy.url().should('include', '/purchase-guide?section=bus')
    })

    it('راهنمای رزرو هتل خارجی', () => {
        cy.contains('راهنمای رزرو هتل خارجی').click()
        cy.url().should('include', '/purchase-guide?section=international-hotel')
    })

    it('راهنمای استرداد بلیط', () => {
        cy.contains('راهنمای استرداد بلیط').click({force: true})
        cy.url().should('include', '/refund-guide?section=domestic-flight')
    })

    /*it('بلیط قطار', () => {
        cy.contains('بلیط قطار').click()
        cy.get('a').should('have.attr', 'href', 'https://www.alibaba.ir/train-ticket')
    })*/

    it('خرید بلیط هواپیما خارجی', () => {
        cy.contains('خرید بلیط هواپیما خارجی').click()
        cy.url().should('include', '/iranout')
    })

    it('اطلاعات فرودگا‌هی', () => {
        cy.contains('اطلاعات فرودگا‌هی').click({force: true})
        cy.url().should('include', '/flight-info')
    })

    it('شیوه‌نامه حقوق مسافر', () => {
        cy.contains('شیوه‌نامه حقوق مسافر').click()
        cy.get('a[href="/passenger-rights.pdf"]').should('have.attr', 'target', '_blank')
    })

})