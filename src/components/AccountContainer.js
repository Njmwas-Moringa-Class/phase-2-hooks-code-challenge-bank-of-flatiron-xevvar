import React, {useState} from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {

  const [searchTerm, setSearchTerm] = useState(""); 
  const [filteredTransactions, setFilteredTransactions] = useState([]);

  function handleAddTransaction (newTransaction) {
    
    fetch("http://localhost:8001/transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTransaction),
    })
      .then((response) => response.json())
      .then((data) => {
        setFilteredTransactions((prevTransactions) => [data, ...prevTransactions])
      })
      .finally(() => {
       
        setSearchTerm("");
      });
      
  };

  function handleSearch (term) {
    setSearchTerm(term);
    
  };

  return (
    <div>
      <Search onSearch={handleSearch} searchTerm={searchTerm}/>
      <AddTransactionForm onAddTransaction={handleAddTransaction}/>
      <TransactionsList newTransactions={filteredTransactions}/>
    </div>
  );
}

export default AccountContainer;
