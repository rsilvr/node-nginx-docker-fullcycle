FROM node:16.18.1

RUN apt update && \
  apt install -y wget netcat && \
  wget https://github.com/eficode/wait-for/releases/download/v2.2.3/wait-for -P /usr/local/bin && \
  chmod +x /usr/local/bin/wait-for