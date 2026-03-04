// Lire le nom d'utilisateur dans l'URL ( ?user=xxx )
function getUsernameFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get('user') || 'Utilisateur';
}

document.addEventListener('DOMContentLoaded', () => {
  const username = getUsernameFromUrl();
  const chatTitle = document.getElementById('chat-title');
  const messagesContainer = document.getElementById('chat-messages');
  const input = document.getElementById('message-input');
  const btnSend = document.getElementById('btn-send');

  if (chatTitle) {
    chatTitle.textContent = username;
  }

  function sendMessage() {
    const text = input.value.trim();
    if (!text) return;

    const row = document.createElement('div');
    row.className = 'message-row me';

    const bubble = document.createElement('div');
    bubble.className = 'message-bubble';
    bubble.textContent = text;

    row.appendChild(bubble);
    messagesContainer.appendChild(row);

    messagesContainer.scrollTop = messagesContainer.scrollHeight;
    input.value = '';
  }

  if (btnSend && input) {
    btnSend.addEventListener('click', sendMessage);
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        sendMessage();
      }
    });
  }
});