# Use an official Node.js runtime as a parent image
FROM node:16-alpine

# Set the working directory in the container
WORKDIR /workspace

# Copy the package.json and package-lock.json (or yarn.lock) into the container
COPY package*.json ./

# Install the dependencies inside the container
RUN npm install --legacy-peer-deps

# Copy the rest of your application code into the container
COPY . .

# Expose the port your app will run on (e.g., 3000 for a typical React app)
EXPOSE 3000

# Run the build command (if needed)
RUN npm run build

# Command to run your app
CMD ["npm", "start"]
