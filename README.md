# Svelte Sapper sample

## Cloning the repo

`$ git clone https://github.com/naijopkr/svelte-sample.git`

`$ cd svelte-sample`

`$ npm install`

## Configuring the database

You can use the any Sql database supported by `sequelize`, but the sql files are made for postgres,
so it may need some adaptations.

After creating the database for the application, run the scripts on `initial_migrations.sql` to create the tables needed on the application. Then, run the scripts on `db_seeders.sql` to provide initial data for the application.

Configure the `DATABASE_URL` on the `drone-compose.yml` for both services (svelte-samble and backend-api).

At last, create a `.env` file with the `DATABASE_URL` as well.

## Running the application

### 1. With docker compose

On the project root:

`$ docker-compose up --build`

The frontend sever will be listening to port `3000`, and the backend server on port `5000`. You can change it on the `docker-compose.yml` file.

### 2. Running locally with npm

Start the frontend server:

`$ npm run dev`

Start the backend server:

`$ npm run api`

Note: you only need to run the backend server if you want to use postman, insomnia or other similar application to create new data.

## Creating data from the api

By default, the api will be running on `http://localhost:5000`.

### 1. Create a Tv Show

`POST /tvshows`

BODY
```json
{
	"name": "Supernatural",
	"description": "Hunting monsters, saving people, the family business",
	"releaseYear": "2005"
}
```

RESPONSE
```json
{
    "id": 3,
    "name": "Supernatural",
    "description": "Hunting monsters, saving people, the family business",
    "releaseYear": "2005",
    "updated_at": "2021-01-03T16:14:09.593Z",
    "created_at": "2021-01-03T16:14:09.593Z"
}
```

### 2. Create a character

`POST /tvshows/<int:tvShowId>`

BODY
```json
{
	"name": "Sam Winchester"
}
```

RESPONSE
```json
{
    "id": 20,
    "name": "Sam Winchester",
    "tvShowId": 3,
    "updated_at": "2021-01-03T16:15:33.592Z",
    "created_at": "2021-01-03T16:15:33.592Z"
}
```
