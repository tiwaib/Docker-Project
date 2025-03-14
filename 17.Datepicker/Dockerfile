# Use Nginx as the base image
FROM nginx:alpine

# Set working directory
WORKDIR /usr/share/nginx/html

# Copy all files (HTML, CSS, JS) directly into the web root
COPY . /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
