#!/bin/sh
set -ex

envsubst < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf
wait-for app:$NODE_NGINX_APP_PORT -- nginx -g "daemon off;"