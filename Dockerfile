# STEP 1
FROM node:16 AS builder

WORKDIR /app

COPY . .

RUN npm i 

RUN npm run build


# STEP 2
FROM node:16-alpine
WORKDIR /app
ENV NODE_ENV dev
COPY --from=builder /app ./
EXPOSE 3000
CMD ["npm","run","start:dev"]