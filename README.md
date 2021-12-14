## Docker Compose scaffold

Work in progress. Scaffold to bring your own frontend, api, and db in docker-compose setup.

### Requirements

Docker

### Setup

Clone this repo to yourapp-app:

`git clone https://github.com/jamidwyer/docker-compose-scaffold.git yourapp-app`

`cd yourapp-app`

Clone your frontend to yourapp-frontend:

`git clone https://github.com/[user]/yourapp-frontend.git frontend`

Clone your api to yourapp-api:

`git clone https://github.com/[user]/yourapp-api.git api`

Clone your db to yourapp-db:

`git clone https://github.com/[user]/yourapp-db.git db`

Fill in the blanks in docker-compose.yml.

As an example, using strapi for your API might give you:

```yml
services:
  api:
    image: strapi/strapi
    container_name: api
    restart: unless-stopped
    env_file: .env
    environment:
      DATABASE_CLIENT: ${DATABASE_CLIENT}
      DATABASE_NAME: ${DATABASE_NAME}
      DATABASE_HOST: ${DATABASE_HOST}
      DATABASE_PORT: ${DATABASE_PORT}
      DATABASE_USERNAME: ${DATABASE_USERNAME}
      DATABASE_PASSWORD: ${DATABASE_PASSWORD}
    networks:
      - strapi-app-network
    volumes:
      - ./app:/srv/app
    ports:
      - "1337:1337"
```

Fill in the values in .env.

### Run

`docker-compose build`

`docker-compose up`

You can see api calls at http://0.0.0.0:1337/ and the frontend at http://0.0.0.0:5900/

### TODO

Submodules.

I'd love to make a cli that takes in urls to the frontend, api, and db and builds docker-compose.yml.
