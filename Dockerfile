# Utilisez une image Node.js comme base
FROM node:latest AS builder

# Définir le répertoire de travail
WORKDIR /app

# Copiez les fichiers du package.json et du package-lock.json pour installer les dépendances
COPY package*.json ./

# Installez les dépendances
RUN npm install

# Copiez le reste des fichiers de l'application
COPY . .

# Construisez l'application
RUN npm run build

# Stage final: Utilisez un serveur HTTP léger pour servir l'application construite
FROM nginx:alpine

# Copiez les fichiers construits de l'étape précédente vers le répertoire de travail du serveur web Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Exposez le port 80 pour que l'application soit accessible
EXPOSE 80

# Commande de démarrage du serveur Nginx
CMD ["nginx", "-g", "daemon off;"]
