FROM nginx:alpine

# Set the working directory
WORKDIR /usr/share/nginx/html

# Remove the default Nginx index.html file
RUN rm -rf ./*

# Copy project files to the container
COPY index.html /usr/share/nginx/html/
COPY style.css /usr/share/nginx/html/
COPY script.js /usr/share/nginx/html/

# Expose port 8081
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
