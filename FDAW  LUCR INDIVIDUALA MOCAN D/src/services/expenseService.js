import axios from 'axios';

const API_URL = 'http://localhost:5000/api/expenses';

export const getExpenses = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching expenses:', error);
    return [];
  }
};

export const addExpense = async (expense) => {
  try {
    await axios.post(API_URL, expense);
  } catch (error) {
    console.error('Error adding expense:', error);
  }
};
