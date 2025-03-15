FROM nginx:alpine

WORKDIR /usr/share/nginx/html

COPY Moving_Panda.html .
COPY Moving_Panda.css .
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
