build:
    docker build --rm -t postcommit .

up:
    docker compose up

styles:
    docker compose exec web npm run css:watch
