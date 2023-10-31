import { NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { AppModule } from './app.module'
import { ValidationPipe, VersioningType } from '@nestjs/common'

const { OFFLINE } = process.env

export async function createApp(host?: string, stage?: string) {
  const app = await NestFactory.create(AppModule)

  app.setGlobalPrefix('medy')
  app.enableVersioning({
    type: VersioningType.URI,
  })

  const config = new DocumentBuilder()
    .setTitle('customerscoops-ApiClients')
    .setDescription('Api for the exchange of information with Medy')
    .setVersion('1.0')
    .addServer(
      OFFLINE === 'true' ? 'http://localhost:3000' : `https://${host}/${stage}`,
    )
    .addTag('Relacional', 'API Endpoints POST (Rate Limit 10/min)')
    .addApiKey()
    .build()
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('medy/docs', app, document)

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  )

  return app
}

if (OFFLINE === 'true') {
  createApp().then((app) => app.listen(3000))
}
