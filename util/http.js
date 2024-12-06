import axios from "axios";

const BACKEND_URL= "https://loginappcar-default-rtdb.firebaseio.com/";

const DB_COLLECTION= "/cars.json";

export async function storeCars(cars) {
  const response = await axios.post(BACKEND_URL + DB_COLLECTION, cars);
  const id= response.data.id;
  return id;
}

export async function listCars() {
  try {
    const response = await axios.get(BACKEND_URL + DB_COLLECTION);

    const carsArray = [];
    for (const key in response.data) {
      const car = {
        id: key,
        name: response.data[key].name,
        price: response.data[key].price,
        image: response.data[key].image,
        hpower: response.data[key].hpower,
        starts: response.data[key].starts,
        type: response.data[key].type,
        char: response.data[key].char,
        brand: response.data[key].brand,
        description: response.data[key].description,
      };
      carsArray.push(car);
    }

    return carsArray; // Cambiado para retornar la variable correcta
  } catch (error) {
    console.error("Error fetching cars from Firebase:", error);
    throw error;
  }
}

//Usuarios
export async function storeUser(userId, user) {
  try {
    const response = await axios.put(`${BACKEND_URL}/users/${userId}.json`, user);
    return response.data;
  } catch (error) {
    console.error("Error storing user:", error);
    throw error;
  }
}

export async function getUserById(userId) {
  try {
    const response = await axios.get(`${BACKEND_URL}/users/${userId}.json`);
    return response.data.name; // Retorna solo el nombre
  } catch (error) {
    console.error("Error fetching user by ID:", error);
    throw error;
  }
}

//-----------------------------------------------------------------------
//tarjetas
export const storeCard = async ({ userId, ...cardData }) => {
  try {
    const response = await axios.post(
      `${BACKEND_URL}/users/${userId}/cards.json`,
      cardData
    );
    return response.data.name; // Retorna el ID único generado por Firebase
  } catch (error) {
    console.error('Error al guardar la tarjeta:', error);
    throw new Error('No se pudo guardar la tarjeta.');
  }
};

// Listar tarjetas
export const listCards = async (userId) => {
  try {
    const response = await axios.get(`${BACKEND_URL}/users/${userId}/cards.json`);
    const cardsData = response.data || {};
    return Object.entries(cardsData).map(([id, card]) => ({
      id,
      ...card,
    }));
  } catch (error) {
    console.error('Error al listar las tarjetas:', error);
    throw new Error('No se pudieron listar las tarjetas.');
  }
};
// Actualizar tarjeta
export const updateCard = async (cardId, userId, updatedData) => {
  try {
    await axios.patch(
      `${BACKEND_URL}/users/${userId}/cards/${cardId}.json`,
      updatedData
    );
  } catch (error) {
    console.error('Error al actualizar la tarjeta:', error);
    throw new Error('No se pudo actualizar la tarjeta.');
  }
};
// Eliminar tarjeta
export const deleteCard = async (cardId, userId) => {
  try {
    await axios.delete(`${BACKEND_URL}/users/${userId}/cards/${cardId}.json`);
  } catch (error) {
    console.error('Error al eliminar la tarjeta:', error);
    throw new Error('No se pudo eliminar la tarjeta.');
  }
};