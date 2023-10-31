import { Controller, Post, Body, Get } from '@nestjs/common'
import { ApiBody, ApiTags } from '@nestjs/swagger'
import { StandardResponses } from 'src/common/decorators/responses.decorator'
import { RelacionalService } from './relacional.service'
import { CreateRelacionalDto } from './dto/create-relacional.dto'

@ApiTags('Relacional')
@Controller({
  path: 'relacional',
  version: '1',
})
export class RelacionalController {
  constructor(private readonly relacionalService: RelacionalService) {}

  @Post()
  @ApiBody({
    description:
      'With this request, data is entered into the corresponding tables to send the surveys to the corresponding clients.',
    type: CreateRelacionalDto,
  })
  @StandardResponses()
  create(@Body() createRelacionalDto: CreateRelacionalDto) {
    return this.relacionalService.create(createRelacionalDto)
  }

  @Get()
  getAll() {
    return 'return all relacional'
  }
}
