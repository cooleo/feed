FROM node:4.2.2


RUN npm -g install sails
ADD . /feeds-api/www
RUN cd /feeds-api/www; npm install

EXPOSE 1441

CMD cd /feeds-api/www; sails lift
