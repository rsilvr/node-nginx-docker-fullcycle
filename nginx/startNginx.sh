#!/bin/sh
set -ex

envsubst < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf # replace variables in the file "default.conf.template" with env vars with same name and output all to "default.conf" file
wait-for app:$NODE_NGINX_APP_PORT -t $NODE_NGINX_APP_CONTAINER_TIMEOUT -- nginx -g "daemon off;" # wait until app container is ready (answering at its port)