describe('/404', () => {
    it('it will return 404', (done) => {
        chai.request(server)
            .get('/blabla')
            .end((err, res) => {
                expect(res).to.have.status(404);
                done();
            });
    });
});