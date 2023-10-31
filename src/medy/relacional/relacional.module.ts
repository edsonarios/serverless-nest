import { Module } from '@nestjs/common'
import { RelacionalService } from './relacional.service'
import { RelacionalController } from './relacional.controller'

@Module({
  controllers: [RelacionalController],
  providers: [RelacionalService],
})
export class RelacionalModule {}
