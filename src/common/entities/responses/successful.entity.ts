import { ApiProperty } from '@nestjs/swagger'
import { CreateRelacionalDto } from 'src/medy/relacional/dto/create-relacional.dto'
class ResponseSuccessful {
  @ApiProperty({
    example: 'OK',
  })
  status: string

  @ApiProperty({
    example: 'Description.',
  })
  description: string

  @ApiProperty({
    example: ['Details.'],
  })
  details: CreateRelacionalDto[]

  @ApiProperty({
    example: '2023-10-27 15:14:55',
  })
  date: Date
}

export class Successful {
  @ApiProperty()
  response: ResponseSuccessful
}
