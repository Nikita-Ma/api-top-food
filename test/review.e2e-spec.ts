import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { CreateReviewDto } from '../src/review/dto/create-review.dto';
import { disconnect, Types } from 'mongoose';
import { REVIEW_NOT_FOUND } from '../src/review/review.constants';
import { AuthDto } from '../src/auth/dto/auth.dto';


const productId = new Types.ObjectId().toHexString();
//mocs


const loginDTO: AuthDto = {
  login: 'a@a.ru',
  password: '1',
};


const testDTO: CreateReviewDto = {
  name: 'Test',
  title: 'Header',
  description: 'Desc',
  rating: 5,
  productId,
};

// describes the group test
describe('AppController (e2e)', () => {
  let app: INestApplication;
  let createdId: string;
  let token: string;
  // run before next test (it)
  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();


    const { body } = await request(app.getHttpServer())
      .post('auth/login')
      .send(loginDTO)
    token = body.access_token;
  });
// One case test
  it('/review/create (POST)  - success', async (done) => {
    return request(app.getHttpServer())
      .post('/review/create')
      .send(testDTO)
      .expect(201)
      .then(({ body }: request.Response) => {
        createdId = body._id;
        expect(createdId).toBeDefined();
        done(); // end test
      });
  });


  it('/review/create (POST)  - fail', () => {
    return request(app.getHttpServer())
      .post('/review/create')
      .send({ ...testDTO, rating: 0 })
      .expect(400);
  });


  it('/review/byProduct/:productId (GET) - success', async (done) => {
    return request(app.getHttpServer())
      .get('/review/byProduct/' + productId)
      .expect(200)
      .then(({ body }: request.Response) => {
        expect(body.length).toBe(1);
        done();
      });
  });

  it('/review/byProduct/:productId (GET) - fail', async (done) => {
    return request(app.getHttpServer())
      .get('/review/byProduct/' + new Types.ObjectId().toHexString())
      .expect(200)
      .then(({ body }: request.Response) => {
        expect(body.length).toBe(0);
        done();
      });
  });


  it('/review/:id (DELETE)  - success', () => {
    return request(app.getHttpServer())
      .delete('/review/' + createdId)
      .set('Authorization', 'Bearer' + token)
      .expect(200);
  });


  it('/review/:id (DELETE)  - fail', () => {
    return request(app.getHttpServer())
      .delete('/review/' + new Types.ObjectId().toHexString())
      .set('Authorization', 'Bearer' + token)
      .expect(404, {
        statusCode: 404,
        message: REVIEW_NOT_FOUND,
      });
  });


  afterAll(() => {
    disconnect(); // disconnect DB
  });
});
