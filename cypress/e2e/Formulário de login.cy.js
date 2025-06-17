describe('Login de Usuario - Web', () => {
    it('Mensagem de erro ao não informar username', () => {
        cy.fixture("usuario").then(function (usuario) {
            const user = usuario.criar
            cy.visit('/login')
            cy.get('#password').type(user.password)
            cy.get('[class="fa fa-2x fa-sign-in"]').click()
            cy.contains('Your username is invalid!').should('be.visible')
        })
    })

    it('Mensagem de erro ao não informar senha', () => {
        cy.fixture("usuario").then(function (usuario) {
            const user = usuario.criar
            cy.visit('/login')
            cy.get('#username').type(user.username)
            cy.get('[class="fa fa-2x fa-sign-in"]').click()
            cy.contains('Your password is invalid!').should('be.visible')
        })
    })

    it('Login com sucesso', () => {
        cy.fixture("usuario").then(function (usuario) {
            const user = usuario.criar
            cy.visit('/login')
            cy.get('#username').type(user.username)
            cy.get('#password').type(user.password)
            cy.get('[class="fa fa-2x fa-sign-in"]').click()
            cy.contains('You logged into a secure area!').should('be.visible')
        })
    })

    it('Mensagem de erro ao informar username ou senha incorretos', () => {
        cy.visit('/login')
        cy.get('#username').type('teste')
        cy.get('#password').type('teste')
        cy.get('[class="fa fa-2x fa-sign-in"]').click()
        cy.contains('Your username is invalid!').should('be.visible')
    })
    
    it('Mensagem de erro ao tentar acessar URL de área logada diretamente', () => {
        cy.visit('/secure')
        cy.contains('You must login to view the secure area!').should('be.visible')
    })
})