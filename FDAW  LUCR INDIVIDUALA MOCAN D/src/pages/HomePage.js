import React, { useEffect, useState } from 'react';
import { getExpenses } from '../services/expenseService';
import { Link } from 'react-router-dom';

function HomePage() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    loadExpenses();
  }, []);

  const loadExpenses = async () => {
    const data = await getExpenses();
    setExpenses(data);
  };

  return (
    <div>
      <h1>Expense Tracker</h1>
      <Link to="/add-expense">Add New Expense</Link>
      <ul>
        {expenses.map((expense) => (
          <li key={expense.id}>
            {expense.title} - {expense.amount} {expense.currency}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
