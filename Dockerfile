# Utilisez une image Node.js comme image de base
FROM node:18.15.0-alpine as build

# Définissez le répertoire de travail dans le conteneur
WORKDIR /app

# Copiez les fichiers package.json et package-lock.json
COPY package*.json ./

# Installez les dépendances du projet
RUN npm ci

# Copiez le code source de l'application
COPY . .

# Construisez l'application React
RUN npm run build

# Utilisez une image Nginx pour servir l'application
FROM nginx:1.21.0-alpine

# Copiez les fichiers construits de l'étape précédente
COPY --from=build /app/build /usr/share/nginx/html

# Exposez le port 80 pour accéder à l'application
EXPOSE 80

# Démarrez Nginx lorsque le conteneur est lancé
CMD ["nginx", "-g", "daemon off;"]