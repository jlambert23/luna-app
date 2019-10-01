import { baseUrl } from '../../config';

const api = baseUrl + '/pets';

export const getPets = async () => {
  console.log(api);
  try {
    const response = await fetch(api, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}

export const getPetById = async (id) => {
  try{
    const response = await fetch(`${api}/${id}`);
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}

export const addPet = async (pet) => {
  try {
    const response = await fetch(api + '/add', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        pet: pet
      }),
    });

    return await response.json();
  } catch (error) {
    console.error(error);
  }
}
