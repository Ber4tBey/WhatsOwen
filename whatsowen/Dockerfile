FROM ber4tbey/whatsowen:latest

RUN git clone https://github.com/Ber4tbey/WhatsOwen /root/WhatsOwen
WORKDIR /root/WhatsOwen/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
