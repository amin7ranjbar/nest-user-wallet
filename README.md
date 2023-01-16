# Introduce
Sample backend application and REST-API with Nestjs, RabbitMQ, Docker, Postgres and Redis.

## Usage

#### Clone project
```bash
git clone https://github.com/amin7ranjbar/nest-user-wallet.git
```

#### Install Requirement
Run command below for install npm packages:
```bash
npm i
```

Run command below for pull and run Docker images:
```bash
sudo docker-compose run -d
```

#### Environment
Create **.env** file like [.env.example](https://github.com/amin7ranjbar/nest-user-wallet.git/blob/main/.env.example)

#### Running the app
- development
```bash
npm run start

```
- watch mode
```bash
npm run start:dev

```
- production mode
```bash
npm run start:prod

```

## URLs
- [Document or Swagger](http://localhost:3000/api/)
- [rabbitMQ](http://localhost:15676/)
- [pgAdmin](http://localhost:8080/)
- [redis](http://localhost:8081/)

## Technology
- Typescript
- RabbitMQ
- Node.js
- NestJs
- Docker
- Redis
- Redis-commander
- Postgres
- pgAdmin
- Typeorm
- Swagger


## License

Nest is [MIT licensed](LICENSE).