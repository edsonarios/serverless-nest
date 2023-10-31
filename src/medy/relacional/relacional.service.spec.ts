import { Test, TestingModule } from '@nestjs/testing'
import { RelacionalService } from './relacional.service'

describe('RelacionalService', () => {
  let service: RelacionalService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RelacionalService],
    }).compile()

    service = module.get<RelacionalService>(RelacionalService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
