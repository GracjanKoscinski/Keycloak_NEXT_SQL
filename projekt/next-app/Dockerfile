# Stage 1: Building the app
FROM node:18 AS builder

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application (Optional step for production)
# RUN npm run build

# Stage 2: Run the app
FROM node:18

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install all dependencies (development dependencies included)
RUN npm install

# Copy the application code from the builder stage
COPY --from=builder /app /app

# Expose the port the app runs on
EXPOSE 3000

# Run the app in development mode
CMD ["npm", "run", "dev"]
