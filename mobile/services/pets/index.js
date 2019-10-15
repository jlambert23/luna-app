import { baseUrl } from '../../config';

const api = baseUrl + '/pet';

export const getPets = async () => {
  try {
    const response = await fetch(api, {
      method: 'GET',
      headers: { Accept: 'application/json' },
    });
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}

export const getPetById = async (id) => {
  try{
    const response = await fetch(`${api}/${id}`, {
      method: 'GET',
      headers: { Accept: 'application/json' },
    });
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}

export const createPet = async (name) => {
  try {
    const response = await fetch(api, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: name }),
    });

    return await response.json();
  } catch (error) {
    console.error(error);
  }
}

export const deletePet = async (id) => {
  try {
    const response = await fetch(`${api}/${id}`, { method: 'DELETE' });

    if (response.status !== 204) {
      throw new Error(`Unexpected response code ${response.status}.`);
    }
  } catch (error) {
    console.error(error);
  }
}
