let User = require('../models/User');

describe('/user', () => {
    describe('/account', () => {
        it('user will NOT get account if he was not logged in', (done) => {
            chai.request(server)
                .get('/user/account')
                .end((err, res) => {
                    expect(res).to.have.status(401);
                    done();
                });
        });
    });
});