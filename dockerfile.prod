# Use a specific version of Node.js
FROM node:18

# Create app directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your app's source code
COPY . .

# Set environment variables
ENV MONGO_URL=mongodb://mydatabase:27017/

# Expose the port node.js is going to run on
EXPOSE 3000

# Start command
CMD npm start