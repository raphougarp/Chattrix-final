const express = require('express');
const path = require('path');

const app = express();

// Render fournit le port dans process.env.PORT
const PORT = process.env.PORT || 3000;

// Pour lire les formulaires POST
app.use(express.urlencoded({ extended: true }));

// Fichiers statiques
app.use('/public', express.static(path.join(__dirname, 'public')));

// Page de login par défaut
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

// Traitement du login (pour l'instant : accepte tout)
app.post('/login', (req, res) => {
  const { username } = req.body;
  // Plus tard : vérif BDD, ban, admin, etc.
  res.redirect(`/chat?user=${encodeURIComponent(username || 'Utilisateur')}`);
});

// Page principale chat
app.get('/chat', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'chat.html'));
});

app.listen(PORT, () => {
  console.log(`Chattrix running on port ${PORT}`);
});