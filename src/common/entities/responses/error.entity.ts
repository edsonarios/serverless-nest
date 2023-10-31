import { ApiProperty } from '@nestjs/swagger'

export class Error {
  @ApiProperty({
    example: 'NOK',
  })
  status: string

  @ApiProperty({
    example: 'Error Type.',
  })
  description: string

  @ApiProperty({
    example: ['Error Description.'],
  })
  details: string[]

  @ApiProperty({
    example: '2023-10-27 15:14:55',
  })
  date: Date
}
