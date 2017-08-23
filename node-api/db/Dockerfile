FROM bitnami/mongodb
WORKDIR /bitinami
RUN curl -o setup-db.sh https://gist.githubusercontent.com/fabianin/63d24cf8c1bcfeab5833345f9681b83b/raw/e9996135f7f2ff4c275be87e16328da15ba4b466/setup-db.sh
RUN chmod +x setup-db.sh
CMD ["./setup-db.sh"]
EXPOSE 27017