describe('Cadastrar Card', () => {
    it('Deve cadastrar um novo card em um board existente', () => {
        
        let idListBoard = '65647bb9f34354788f512dfd' // Substituir pelo ID do board existente

        cy.request({
            method: 'POST',
            url: '/1/cards/',
            qs: {
                key: 'cb7cc9a5d7e13f9da37d35d4149a0e96',
                token: 'ATTAfc799d7ef2718a052218a1f3d40e74f5de0aba92911d3ae2db0dc924b8505721C51B0E18',
                idList: idListBoard, 
                name: 'Novo Card',
            },
        }).then((response) => {
            expect(response.status).to.eq(200)

        })
    })
})