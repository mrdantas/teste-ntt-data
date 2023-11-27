describe('Excluir Card', () => {
    it('Deve excluir um card existente', () => {

        let idCard = '65648fe0c43ff1ef5034682a' // Substituir pelo ID do card existente

        cy.request({
            method: 'DELETE',
            url: `/1/cards/${idCard}`,
            qs: {
                key: 'cb7cc9a5d7e13f9da37d35d4149a0e96',
                token: 'ATTAfc799d7ef2718a052218a1f3d40e74f5de0aba92911d3ae2db0dc924b8505721C51B0E18',
            },
        }).then((response) => {
            expect(response.status).to.eq(200)

        })
    })
})