import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addExpense } from '../services/expenseService';

function AddExpensePage() {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('USD');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newExpense = { title, amount: parseFloat(amount), currency };
    await addExpense(newExpense);
    navigate('/');
  };

  return (
    <div>
      <h1>Add Expense</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="MDL">MDL</option>
        </select>
        <button type="submit">Add Expense</button>
      </form>
    </div>
  );
}

export default AddExpensePage;
