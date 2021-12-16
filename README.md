## Docker Compose scaffold

Work in progress. Scaffold to bring your own frontend, api, and db in docker-compose setup.

### Requirements

Docker

### Setup

Clone this repo to yourapp-app:

```bash
git clone https://github.com/jamidwyer/docker-compose-scaffold.git yourapp-app`
cd yourapp-app
s```

#### Frontend

Clone your frontend to yourapp-frontend:

`git clone https://github.com/[user]/yourapp-frontend.git frontend`

Or add a repo you're developing as a submodule:

```bash
mkdir frontend
cd frontend
git submodule add frontend https://github.com/[user]/yourapp-frontend.git
```

#### API

Clone your api to yourapp-api:

`git clone https://github.com/[user]/yourapp-api.git api`

Or add a repo you're developing as a submodule:

```bash
mkdir api
cd api
git submodule add frontend https://github.com/[user]/yourapp-api.git
```

#### Database

Clone your yourapp-db to db:

`git clone https://github.com/[user]/yourapp-db.git db`

Or add a repo you're developing as a submodule:

```bash
mkdir db
cd db
git submodule add db https://github.com/[user]/yourapp-db.git
```

#### Docker setup

Fill in the blanks in docker-compose.yml.

As an example, using a custom frontend cloned into  the frontend directory, the base strapi image for your API and the base mysql image for your database could be:

```yml
version: '3.4'

services:
  frontend:
    container_name: frontend
    image: react-web-ui
    build:
      context: frontend
      dockerfile: Dockerfile
    ports:
      - 5902:80
    stdin_open: true
    environment:
      - backendUrl=http://api
      - CHOKIDAR_USEPOLLING=true
    command: npm start
    depends_on:
      - api

  api:
    image: strapi/strapi
    container_name: api
    restart: unless-stopped
    env_file: .env
    environment:
      DATABASE_CLIENT: ${DATABASE_CLIENT}
      DATABASE_HOST: ${DATABASE_HOST}
      DATABASE_PORT: ${DATABASE_PORT}
      DATABASE_NAME: ${DATABASE_NAME}
      DATABASE_USERNAME: ${DATABASE_USERNAME}
      DATABASE_PASSWORD: ${DATABASE_PASSWORD}
      DATABASE_SSL: 'false'
    volumes:
      - ./app:/srv/app
    ports:
      - '1337:1337'
    depends_on:
      - db

  db:
    image: mysql
    command: mysqld --default-authentication-plugin=mysql_native_password
    container_name: db
    restart: unless-stopped
    env_file: .env
    environment:
      MYSQL_ROOT_PASSWORD: ${DATABASE_PASSWORD}
      MYSQL_DATABASE: ${DATABASE_NAME}
      MYSQL_USER: ${DATABASE_USERNAME}
      MYSQL_PASSWORD: ${DATABASE_PASSWORD}
    volumes:
      - data:/var/lib/mysql
    ports:
      - "3306:3306"

volumes:
  data:
```

Copy the .env example for your database to .env adn fill in the values.

### Run

`docker-compose build`

`docker-compose up`

You can see api calls at http://0.0.0.0:1337/ and the frontend at http://0.0.0.0:5900/

### TODO

Submodules.

I'd love to make a cli that takes in urls to the frontend, api, and db and builds docker-compose.yml.
