# Node-Nginx-Docker App

- Just a simple setup for a node app running behind a NGINX reverse proxy in a containerized environment

## Concepts presented in this project

- Handling a MySQL container
- Using `docker-compose-yml` and common environment variables between services
- Mixing local and remote images
- Using volumes for persistent data and loading project files
- Handling dependencies between containers using [wait-for](https://github.com/eficode/wait-for)