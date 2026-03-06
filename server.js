const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Pour lire les formulaires POST
app.use(express.urlencoded({ extended: true }));

// Fichiers statiques
app.use('/public', express.static(path.join(__dirname, 'public')));

// Page de login par défaut
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

// Traitement du login (pour l'instant: pas de vraie vérif)
app.post('/login', (req, res) => {
  const { username } = req.body;
  // On redirige simplement vers /chat avec le nom dans l'URL
  res.redirect(`/chat?user=${encodeURIComponent(username || 'Utilisateur')}`);
});

// Page principale de chat
app.get('/chat', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'chat.html'));
});

// Panneau admin
app.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'admin.html'));
});

app.listen(PORT, () => {
  console.log(`Chattrix running on port ${PORT}`);
});