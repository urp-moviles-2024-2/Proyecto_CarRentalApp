import axios from "axios";

const BACKEND_URL = "https://loginappcar-default-rtdb.firebaseio.com/";
const DB_COLLECTION = "/cars.json";

export async function listExpenses() {
  const response = await axios.get(BACKEND_URL + DB_COLLECTION);

  const cars = [];
  for (const key in response.data) {
    const expense = {
      id: key,
      name: response.data[key].amount,
      price: response.data[key].price,
      type: response.data[key].type,
      starts: response.data[key].starts,
      image: response.data[key].image,
      hpower: response.data[key].hpower,
      char: response.data[key].char,
      brand: response.data[key].brand
    };
    cars.push(car);
  }
  return cars;
}

/*
export async function storeCar(car) {
  const response = await axios.post(BACKEND_URL + DB_COLLECTION, car);
  const id = response.data.id;
  return id;
}

export async function updateExpense(id, expense) {
  return await axios.put(BACKEND_URL + "/expenses/" + id + ".json", expense);
}

export async function deleteExpense(id) {
  return await axios.delete(BACKEND_URL + "/expenses/" + id + ".json");
}
*/