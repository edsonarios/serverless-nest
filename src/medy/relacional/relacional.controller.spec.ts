import { Test, TestingModule } from '@nestjs/testing'
import { RelacionalController } from './relacional.controller'
import { RelacionalService } from './relacional.service'

describe('RelacionalController', () => {
  let controller: RelacionalController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RelacionalController],
      providers: [RelacionalService],
    }).compile()

    controller = module.get<RelacionalController>(RelacionalController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
