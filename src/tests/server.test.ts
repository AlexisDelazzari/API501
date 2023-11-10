import request from 'supertest';
import {startServer} from '../server';
import {Server} from "net";

describe('Server', () => {
    let app: Server
    beforeAll(() => {
        app = startServer(3001);
    })

    it('should respond with 200 OK', async () => {
        const response = await request(app).get('/check');
        expect(response.status).toBe(200);
    });

    afterAll(() => {
        app.close()
    })
});