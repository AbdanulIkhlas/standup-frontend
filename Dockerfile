# FROM node:18-alpine
# WORKDIR /frontend/
# COPY public/ /frontend/public
# COPY src/ /frontend/src
# COPY package.json /frontend/
# RUN npm install
# CMD ["npm", "start"]
# --------------------------------------
FROM node:18-alpine

# Set working directory
WORKDIR /frontend/

# Copy source files
COPY public/ /frontend/public
COPY src/ /frontend/src
COPY package.json /frontend/
COPY .env /frontend/

# Install dependencies
RUN npm install

# Build the app
RUN npm run build

# Install serve to serve the build files
RUN npm install -g serve

# Expose port
EXPOSE 5000

# Start the app using serve
CMD ["serve", "-s", "build"]
