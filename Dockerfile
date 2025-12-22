
# ===== Step 1 : Build web content =====
FROM node:lts AS builder

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

# Workaround for url bug
RUN ln -s assets dist/undefinedassets


# ===== Step 2 : Package it into an nginx server =====
FROM nginx:latest AS production

# Import built content
COPY --from=builder /home/node/app/dist /var/www/html

EXPOSE 80
