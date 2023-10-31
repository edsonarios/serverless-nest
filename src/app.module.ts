import { Module } from '@nestjs/common'
import { RelacionalModule } from './medy/relacional/relacional.module'

@Module({
  imports: [RelacionalModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
