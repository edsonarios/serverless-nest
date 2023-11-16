import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common'
import { RelacionalModule } from './medy/relacional/relacional.module'
import rateLimit from 'express-rate-limit'

@Module({
  imports: [RelacionalModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
// export class AppModule implements NestModule {
//   configure(consumer: MiddlewareConsumer) {
//     consumer
//       .apply(
//         rateLimit({
//           windowMs: 2 * 60 * 1000, // 15 minutos
//           max: 6, // Límite de 100 solicitudes por ventana de tiempo
//         }),
//       )
//       .forRoutes('*') // Aplica a todas las rutas
//   }
// }
