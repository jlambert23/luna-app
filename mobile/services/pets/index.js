import { baseUrl } from '../../config';

const api = `${baseUrl}/pet`;

export const getPets = async () => {
  try {
    const response = await fetch(api, {
      method: 'GET',
      headers: { Accept: 'application/json' },
    });
    return await response.json();
  } catch (error) {
    return error;
  }
};

export const getPetById = async id => {
  try {
    const response = await fetch(`${api}/${id}`, {
      method: 'GET',
      headers: { Accept: 'application/json' },
    });
    return await response.json();
  } catch (error) {
    return error;
  }
};

export const createPet = async name => {
  try {
    const response = await fetch(api, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name }),
    });

    return await response.json();
  } catch (error) {
    return error;
  }
};

export const updatePet = async pet => {
  try {
    const response = await fetch(`${api}/${pet._id}`, {
      method: 'PATCH',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(pet),
    });

    return await response.json();
  } catch (error) {
    return error;
  }
};

export const deletePet = async id => {
  try {
    const response = await fetch(`${api}/${id}`, { method: 'DELETE' });

    if (response.status !== 204) {
      throw new Error(`Unexpected response code ${response.status}.`);
    }

    return await response.json();
  } catch (error) {
    return error;
  }
};
