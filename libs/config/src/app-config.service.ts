import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'

@Injectable()
export class AppConfigService {
  constructor(private readonly configService: ConfigService) {}

  get isDev(): boolean {
    return this.configService.get('NODE_ENV') === 'development'
  }

  get datasourceUrl(): string | undefined {
    return this.configService.get('DATABASE_URL')
  }

  get port(): number {
    return this.configService.get('PORT', { infer: true }) ?? 3000
  }

  get appVersion(): string | null {
    return this.configService.get('npm_package_version') ?? null
  }

  get globalPrefix(): string | null {
    return this.configService.get('GLOBAL_PREFIX') ?? null
  }

  get rmqUrls(): string[] {
    return this.configService.get('RMQ_URLS').split(', ') ?? []
  }

  get accessTokenSecret(): string {
    return this.configService.getOrThrow('ACCESS_TOKEN_SECRET')
  }

  get accessTokenSecretExpiresIn(): string {
    return this.configService.get('ACCESS_TOKEN_SECRET_EXPIRES_IN') ?? '1d'
  }

  get refreshTokenSecret(): string {
    // fixme: After add env to k8s remove it
    return this.configService.get('REFRESH_TOKEN_SECRET') ?? '2783h789rdhj289dhj9fhsdyiuhf78oy12df'
  }

  get refreshTokenSecretExpiresIn(): string {
    return this.configService.get('REFRESH_TOKEN_SECRET_EXPIRES_IN') ?? '1d'
  }
}
