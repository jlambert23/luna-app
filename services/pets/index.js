import { baseUrl } from '../../config';

const api = baseUrl + '/pets';

export const getPets = async () => {
  try {
    const response = await fetch(api, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    return await response.json();
  }
  catch (error) {
    console.error(error);
  }
}

export const getPetById = async (id) => {
  try{
    const response = await fetch(`${api}/${id}`);
    return await response.json();
  }
  catch (error) {
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
      body: JSON.stringify({
        name: name,
        last_poop: new Date(),
      }),
    });

    return await response.json();
  }
  catch (error) {
    console.error(error);
  }
}
