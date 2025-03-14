# Use the official Nginx base image
FROM nginx:alpine

# Set the working directory
WORKDIR /usr/share/nginx/html

# Remove default Nginx files
RUN rm -rf ./*

# Copy website files into the container
COPY . .

# Expose port 80 for web traffic
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
