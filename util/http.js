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
