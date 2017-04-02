describe('/', () => {
    it('it will return html', (done) => {
        chai.request(server)
            .get('/')
            .end((err, res) => {
                res.should.be.html;
                done();
            });
    });
});