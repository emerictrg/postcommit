# Use the official Node.js LTS image as the base
FROM node:24.0-alpine

# Set the working directory
WORKDIR /app

# Install TypeScript globally
RUN npm install -g typescript

# Optionally copy package.json and install dependencies
# COPY package*.json ./
# RUN npm install

# Copy the rest of your application code
# COPY . .

# Set the default command (optional)
ENTRYPOINT ["npm", "run", "dev"]

