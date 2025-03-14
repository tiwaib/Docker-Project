# Use the official Nginx image as the base image
FROM nginx:alpine

# Set the working directory inside the container
WORKDIR /usr/share/nginx/html

# Copy the entire project into the container
COPY . .

# Expose port 80 for serving the application
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
