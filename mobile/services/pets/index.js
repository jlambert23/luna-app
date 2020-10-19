import { baseUrl } from '../../config';

const api = `${baseUrl}/pet`;

export const getPets = async () => {
  const response = await fetch(api, {
    method: 'GET',
    headers: { Accept: 'application/json' },
  });
  return response.json();
};

export const getPetById = async id => {
  const response = await fetch(`${api}/${id}`, {
    method: 'GET',
    headers: { Accept: 'application/json' },
  });
  return response.json();
};

export const createPet = async name => {
  const response = await fetch(api, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name }),
  });
  return response.json();
};

export const updatePet = async pet => {
  const response = await fetch(`${api}/${pet._id}`, {
    method: 'PATCH',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(pet),
  });
  return response.json();
};

export const deletePet = async id => {
  const response = await fetch(`${api}/${id}`, { method: 'DELETE' });
  if (response.status !== 204) {
    throw new Error(`Unexpected response code ${response.status}.`);
  }
  return response.json();
};

export const addNewPoop = async id => {
  const response = await fetch(`${api}/${id}/poops`, { method: 'POST' });
  return response.json();
};
