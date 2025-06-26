// Arquivo central para chamadas à API Django REST

const API_URL = 'http://192.168.0.10:8000/api/'; // Troque pelo IP do seu backend

export async function getAnimais() {
  const response = await fetch(`${API_URL}animais/`);
  if (!response.ok) throw new Error('Erro ao buscar animais');
  return response.json();
}

export async function getAnimal(id: number) {
  const response = await fetch(`${API_URL}animais/${id}/`);
  if (!response.ok) throw new Error('Erro ao buscar animal');
  return response.json();
}

// Exemplo de POST (adotar animal)
export async function solicitarAdocao(animalId: number, usuarioId: number) {
  const response = await fetch(`${API_URL}adocoes/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ animal: animalId, usuario: usuarioId }),
  });
  if (!response.ok) throw new Error('Erro ao solicitar adoção');
  return response.json();
}

// Adicione outras funções conforme suas rotas do backend