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

# Define an environment variable for the application port with a default value
ENV EXPRESS_API_PORT=3000

# Expose the application port
EXPOSE $EXPRESS_API_PORT

# Start the application
CMD [ "npm", "start" ]