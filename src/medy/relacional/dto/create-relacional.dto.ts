import { ApiProperty } from '@nestjs/swagger'
import { Type, Transform } from 'class-transformer'
import {
  IsDate,
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsPositive,
  IsString,
  MinLength,
  ValidateNested,
} from 'class-validator'

class RelacionalData {
  @ApiProperty({
    example: '2023-06-23',
  })
  @IsNotEmpty()
  @IsDate()
  @Transform(({ value }) => new Date(value))
  birth_date: Date

  @ApiProperty({
    example: 2,
  })
  @IsNotEmpty()
  @IsInt()
  @IsPositive()
  function: number

  @ApiProperty({
    example: 155,
  })
  @IsNotEmpty()
  @IsInt()
  @IsPositive()
  user_id: number

  @ApiProperty({
    example: 'Francisco',
  })
  @IsNotEmpty()
  @IsString()
  @MinLength(1)
  last_name: string
}

export class CreateRelacionalDto {
  @ApiProperty({
    example: 'Francisco',
  })
  @IsNotEmpty()
  @IsString()
  @MinLength(1)
  name: string

  @ApiProperty({
    example: '+56999999999',
  })
  @IsNotEmpty()
  @IsString()
  @MinLength(1)
  phone: string

  @ApiProperty({
    example: 'correo@correo.com',
  })
  @IsNotEmpty()
  @IsEmail()
  @IsString()
  email: string

  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => RelacionalData)
  data: RelacionalData
}
