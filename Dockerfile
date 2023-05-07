FROM ubi8/nodejs-16
USER 0
RUN mkdir /app
COPY src/ /app
RUN chown -R 1001:0 /app
USER 1001
WORKDIR /app
RUN /usr/bin/npm install && npm run test
CMD /usr/bin/node server.js