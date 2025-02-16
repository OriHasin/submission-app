import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as bodyParser from 'body-parser';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(bodyParser.urlencoded({ extended: true }));         // Being able to parse application/x-www-form-urlencoded
  app.useGlobalPipes(new ValidationPipe({whitelist: true, transform: true}),);
  app.enableCors({
    origin: "http://localhost",       // Allow only your React frontend
    methods: "GET,POST,PUT,DELETE",   // Allow specific HTTP methods
  });


  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
