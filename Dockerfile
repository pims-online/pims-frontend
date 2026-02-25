
# ===== Step 1 : Build web content =====
FROM docker.io/node:lts-alpine AS builder

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app

USER node

# Install dependencies
COPY --chown=node:node . .
RUN npm install

# Apply security patches
RUN npm audit fix

# Build project
RUN npm run build


# ===== Step 2 : Package it into an nginx server =====
FROM docker.io/nginx:latest AS production

# Import built content
COPY --from=builder /home/node/app/dist /var/www/html

# Enable log
RUN sed 's%\(\s*error_log\s*\)\S\+\(\s*\)%\1/dev/stdout\2%g' -i /etc/nginx/nginx.conf \
    && sed 's%\(\s*access_log\s*\)\S\+\(\s*\)%\1/dev/stdout\2%g' -i /etc/nginx/nginx.conf

# Serve files from the built content
RUN sed 's%root.*%root   /var/www/html;%' -i /etc/nginx/conf.d/default.conf
# Set default page
RUN sed 's%index.*%try_files $uri $uri/ /index.html;%' -i /etc/nginx/conf.d/default.conf

EXPOSE 80
