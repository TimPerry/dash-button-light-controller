FROM node:6.9-onbuild

RUN apt update && apt install -y libpcap-dev

EXPOSE 4343
