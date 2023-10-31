import { Injectable } from '@nestjs/common'
import { CreateRelacionalDto } from './dto/create-relacional.dto'
import { Successful } from 'src/common/entities/responses/successful.entity'

@Injectable()
export class RelacionalService {
  create(createRelacionalDto: CreateRelacionalDto) {
    const response: Successful = {
      response: {
        status: 'OK',
        description: 'Description.',
        details: [createRelacionalDto],
        date: new Date(),
      },
    }
    return response
  }
}
