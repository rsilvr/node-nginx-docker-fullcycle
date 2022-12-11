#!/bin/sh
set -ex

npm ci
wait-for mysql:3306 -t $NODE_NGINX_APP_CONTAINER_TIMEOUT -- npm start # wait until database container is ready (answering at port 3306)