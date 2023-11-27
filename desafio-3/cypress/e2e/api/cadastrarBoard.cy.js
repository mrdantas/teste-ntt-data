describe('Cadastrar Board', () => {
    it('Deve cadastrar um novo board', () => {

        cy.request({
            method: 'POST',
            url: '/1/boards/',
            qs: {
                key: 'cb7cc9a5d7e13f9da37d35d4149a0e96',
                token: 'ATTAfc799d7ef2718a052218a1f3d40e74f5de0aba92911d3ae2db0dc924b8505721C51B0E18',
                name: 'Novo Board',
            },
        }).then((response) => {
            expect(response.status).to.eq(200)
            
        })
    })
})
