# Use the official Nginx image from Docker Hub as the base image
FROM nginx:alpine

# Set the working directory inside the container
WORKDIR /usr/share/nginx/html

# Remove the default Nginx welcome page
RUN rm -rf /usr/share/nginx/html/*

# Copy the current directory contents into the container's web directory
COPY . .

# Expose port 80 to the outside world
EXPOSE 80

# The default command is already set to run Nginx in the background, so no need to override it
