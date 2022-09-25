
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ValidationPipe } from './pipes/validation.pipe';


async function start() {
    const PORT = process.env.PORT || 5000;
    const app = await NestFactory.create(AppModule)

    app.enableCors(
        {
            credentials: true,
            origin: [
                'http://localhost:3000',
                'http://localhost:7100',
                'http://localhost:5000',
                'http://backend:7100',
                'http://frontend:3000',
                'postgres:5000',
                'postgres:7100',
                '0.0.0.0:7100',
                'http://127.1.1.0:7100',
                'http://127.1.1.0:3000',
                'http://5.100.99.105:7100',
                'http://5.100.99.105:3000',
            ],
        }
    );

    const config = new DocumentBuilder()
        .setTitle('Блог')
        .setDescription('Небольшой блог')
        .setVersion('1.0.0')
        .addTag('Blog')
        .build()
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('/api/docs', app, document)

    app.useGlobalPipes(new ValidationPipe())

    await app.listen(PORT, () => console.log(`Server is started on port ${PORT}`))
}

start()