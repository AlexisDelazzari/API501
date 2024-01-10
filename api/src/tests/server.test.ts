import { Server } from '../server';
import request from 'supertest';
describe('Test des routes', () => {
    const app = new Server();
    const link = process.env.URL_TEST+":"+process.env.PORT_TEST;
    beforeAll(() => {
        app.start(process.env.PORT_TEST);
    });

    afterAll(() => {
        app.stop();
    });

    //on verifie que le server est initialisé
    it('Initialisé', async () => {
        expect(app).toBeDefined();
    });

    //on check la route /check
       it('Check', async () => {
           request(link)
               .get('/check')
               .expect(200)
               .end((err, res) => {
                     if (err) throw err;
                });
        });

});
