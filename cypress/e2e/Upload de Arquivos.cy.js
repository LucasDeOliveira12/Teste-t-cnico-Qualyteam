describe('Upload de Arquivos- Web', () => {
    it('Fazer upload através do botão choose file', () => {
        cy.visit('/upload')
        cy.get('#file-upload').as('fileInput').attachFile('foto1.jpg')
        cy.get('#file-submit').click()
        cy.contains('File Uploaded!').should('be.visible')
    })

    it('Fazer upload através da área de upload marcada', () => {
        cy.visit('/upload')
        cy.get('#drag-drop-upload').selectFile('cypress/fixtures/foto1.jpg', {
            action: 'drag-drop'
        });
        cy.get('#file-submit').click()
        cy.contains('File Uploaded!').should('be.visible')
        cy.get('#uploaded-files').should('contain', 'foto1.jpg')
    })
    
    it('Fazer upload de múltiplas imagens através da área de upload marcada', () => {
        cy.visit('/upload')
        cy.get('#drag-drop-upload').selectFile([
            'cypress/fixtures/foto1.jpg',
            'cypress/fixtures/foto2.jpg',
            'cypress/fixtures/foto3.jpg'],{
            action: 'drag-drop'
        });
        cy.get('#file-submit').click()
        cy.contains('File Uploaded!').should('be.visible')


    })
})



