import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { EmployeeModule } from './employee/employee.module';
import { DepartmentModule } from './department/department.module';
import { PositionModule } from './position/position.module';
import { SalaryModule } from './salary/salary.module';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    // config for env variables
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),

    // connect to the database server
    TypeOrmModule.forRootAsync({
      // setup use the env variable
      imports: [ConfigModule],
      inject: [ConfigService],

      useFactory: (configService: ConfigService) => ({        
        type: 'postgres',
        host: configService.get<string>("DATABASE_HOST"),
        port: configService.get<number>("DATABASE_PORT"),
        username: configService.get<string>("DATABASE_USER"),
        password: configService.get<string>("DATABASE_PASSWORD"),
        database: configService.get<string>("DATABASE_NAME"),
        entities: [],
        synchronize: true,
        autoLoadEntities: true,
      })
    }),
    AuthModule,
    EmployeeModule,
    DepartmentModule,
    PositionModule,
    SalaryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
