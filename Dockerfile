# Use an official Node.js runtime as the base image
FROM node:20

# Set the working directory in the container to /app
WORKDIR /app

# Copy package.json and package-lock.json into the working directory
COPY package*.json ./

# Install the project dependencies
RUN npm install

# Copy the rest of the project files into the working directory
COPY . .

# Compile TypeScript to JavaScript
RUN npm run build

# Expose the application port
EXPOSE 80

# Start the application
CMD [ "npm", "start" ]