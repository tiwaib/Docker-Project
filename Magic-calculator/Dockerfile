# Use the latest Node.js image
FROM node:latest

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy the rest of the app (including "public" folder)
COPY . .

# Expose port 8085
EXPOSE 8085

# Start the Node.js application
CMD ["node", "app.js"]
