import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();
  app.use(helmet());
  
  // create example endpoint
  const config = new DocumentBuilder()
    .setTitle('HRM SWAGGER')
    .setDescription('this swagger use for test HRM-BE API')
    .setVersion('1.0')
    .addTag('HRM')
    .build();
  const document = SwaggerModule.createDocument(app, config);

  // set up the Swagger api endpoint for prooject
  SwaggerModule.setup('api', app, document);


  await app.listen(3000);
}
bootstrap();
