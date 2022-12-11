FROM nginx:1.22.1

COPY default.conf.template /etc/nginx/conf.d/default.conf.template

COPY startNginx.sh /usr/local/bin/startNginx.sh

RUN apt update && \
  apt install -y wget netcat && \
  wget https://github.com/eficode/wait-for/releases/download/v2.2.3/wait-for -P /usr/local/bin && \
  chmod +x /usr/local/bin/wait-for && \
  chmod +x /usr/local/bin/startNginx.sh

ENTRYPOINT ["/docker-entrypoint.sh"]
