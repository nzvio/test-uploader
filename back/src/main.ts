import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as bodyParser from 'body-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({origin: ["http://uploader.vio.net.ua"]});
	app.use(bodyParser.json({limit: '50mb'}));	
  await app.listen(3030);
}
bootstrap();
