FROM node:18-alpine

# Set working directory
WORKDIR /frontend/

# Copy source files
COPY public/ /frontend/public
COPY src/ /frontend/src
COPY package.json /frontend/
COPY .env /frontend/
COPY tailwind.config.js /frontend/
COPY postcss.config.js /frontend/
COPY src/index.css /frontend/src/  # Pastikan file CSS utama di-copy

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
