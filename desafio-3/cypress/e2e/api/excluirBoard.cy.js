describe('Excluir Board', () => {
    it('Deve excluir um board existente', () => {
        
        let idBoard = '65648b2cfca902dc979bc6a6' // Substituir pelo ID do board existente
        
        cy.request({
            method: 'DELETE',
            url: `/1/boards/${idBoard}`, 
            qs: {
                key: 'cb7cc9a5d7e13f9da37d35d4149a0e96',
                token: 'ATTAfc799d7ef2718a052218a1f3d40e74f5de0aba92911d3ae2db0dc924b8505721C51B0E18',
            },
        }).then((response) => {
            expect(response.status).to.equal(200)
    
        })
    })
})