import { PartialType } from '@nestjs/mapped-types'
import { CreateRelacionalDto } from './create-relacional.dto'

export class UpdateRelacionalDto extends PartialType(CreateRelacionalDto) {}
