# Build stage
FROM node:20-alpine AS build
WORKDIR /app/front_react
COPY front_react/package*.json ./
RUN npm install
COPY front_react/ ./
COPY foxhole/ /app/foxhole/
COPY includes/ /app/includes/
RUN npm run build:bundle-assets

# Runtime stage
FROM nginx:1.27-alpine
COPY --from=build /app/front_react/dist-bundle /usr/share/nginx/html
COPY front_react/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
