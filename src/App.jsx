import { useState, useEffect } from 'react';
import ExpenseForm from './ExpenseForm.jsx';
import ExpenseList from './ExpenseList.jsx';
import Summary from './Summary.jsx';
import './App.css'

function App() {
    const [expenses, setExpenses] = useState(() => {
        const saved = localStorage.getItem('expenses');
        return saved ? JSON.parse(saved) : [];
    });

    const [filter, setFilter] = useState('All');

    useEffect(() => {
        localStorage.setItem('expenses', JSON.stringify(expenses));
    }, [expenses]);

    const filteredExpenses =
        filter === 'All' ? expenses : expenses.filter(expense => expense.category === filter);

    function handleDelete(id) {
        setExpenses((prev) => prev.filter(expense => expense.id !== id));
    }

  return (
      <>
        <p>I'm super poor :(</p>
          <ExpenseForm setExpenses={setExpenses} />
          <select value={filter} onChange={e => setFilter(e.target.value)}>
              <option value='All'>All</option>
              <option value='Food'>Food</option>
              <option value='Housing'>Housing</option>
              <option value='Car'>Car</option>
              <option value='Entertainment'>Entertainment</option>
              <option value='Other'>Other</option>
          </select>
          <Summary expenses={filteredExpenses} />
          <ExpenseList expenses={filteredExpenses} onDelete={handleDelete} />
      </>
  )
}

export default App