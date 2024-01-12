import { type NestExpressApplication } from '@nestjs/platform-express'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

export const buildSwaggerDocument = (
  app: NestExpressApplication,
  {
    globalPrefix,
    swaggerVersion,
  }: {
    globalPrefix: string | null
    swaggerVersion: string | null
  }
) => {
  const config = new DocumentBuilder()

  config
    .setTitle('Snapix project')
    .setDescription(
      "Sorry I'm working on new modules and don't have time to write swagger documentation. But in time it will be completely written"
    )
  if (swaggerVersion !== null) {
    config.setVersion(swaggerVersion)
  }

  config.addTag('auth').addBasicAuth()

  const document = SwaggerModule.createDocument(app, config.build())
  SwaggerModule.setup(
    globalPrefix !== null ? `${globalPrefix}/swagger` : '/swagger',
    app,
    document,
    {
      // customfavIcon: '../../../favicon.ico',
    }
  )
}
