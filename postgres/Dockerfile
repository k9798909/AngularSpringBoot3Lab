FROM postgres:15.2-alpine
ENV POSTGRES_USER=users
ENV POSTGRES_PASSWORD=password
ENV POSTGRES_DB=mydatabase
COPY . /docker-entrypoint-initdb.d/
EXPOSE 5432