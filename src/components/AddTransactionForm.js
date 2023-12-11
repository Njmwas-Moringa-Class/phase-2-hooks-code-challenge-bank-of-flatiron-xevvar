import React, { useState } from "react";



function AddTransactionForm({ onAddTransaction }) {
  const [transaction, setTransaction] = useState({
    date: "",
    description: "",
    category: "",
    amount: 0,
  });


  function handleInputChange(event) {
    const { name, value } = event.target;
    setTransaction((prevTransaction) => ({ ...prevTransaction, [name]: value }));
  };

  function handleSubmit(event) {
    event.preventDefault();

    onAddTransaction(transaction);

    setTransaction({
      date: "",
      description: "",
      category: "",
      amount: 0,
    });
  };



  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="inline fields">
          <input type="date" name="date" onChange={handleInputChange}/>
          <input type="text" name="description" placeholder="Description" onChange={handleInputChange}/>
          <input type="text" name="category" placeholder="Category" onChange={handleInputChange}/>
          <input type="number" name="amount" placeholder="Amount" step="0.01" onChange={handleInputChange}/>
        </div>
        <button className="ui button" type="submit" onSubmit={handleSubmit}>
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
