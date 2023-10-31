import { ApiResponse } from '@nestjs/swagger'
import { Error } from '../entities/responses/error.entity'
import { Successful } from '../entities/responses/successful.entity'

export const StandardResponses = () => {
  return function (
    target: object,
    key?: string | symbol,
    descriptor?: TypedPropertyDescriptor<any>,
  ) {
    ApiResponse({
      status: 200,
      description: 'Successful operation',
      type: Successful,
    })(target, key, descriptor)
    ApiResponse({
      status: 400,
      description: 'Bad Request',
      type: Error,
    })(target, key, descriptor)
    ApiResponse({
      status: 401,
      description: 'Unauthenticated',
      type: Error,
    })(target, key, descriptor)
    ApiResponse({
      status: 409,
      description: 'Conflict',
      type: Error,
    })(target, key, descriptor)
    ApiResponse({
      status: 422,
      description: 'Unprocessable entity',
      type: Error,
    })(target, key, descriptor)
    ApiResponse({
      status: 429,
      description: 'Too Many Requests',
      type: Error,
    })(target, key, descriptor)
    ApiResponse({
      status: 500,
      description: 'Server Error',
      type: Error,
    })(target, key, descriptor)
  }
}
