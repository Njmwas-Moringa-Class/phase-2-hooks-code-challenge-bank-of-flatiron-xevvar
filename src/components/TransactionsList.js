import React,{useState , useEffect} from "react";
import Transaction from "./Transaction";

function TransactionsList({newTransactions}) {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8001/transactions")
      .then((response) => response.json())
      .then((data) => setTransactions(data))
  }, [newTransactions]);

  // useEffect(() => {
  //   setTransactions((prevTransactions) => [...prevTransactions, ...newTransactions]);
  // }, [newTransactions]);

  // const mergedTransactions = [ ...transactions,...newTransactions];




  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Category</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
        </tr>
        {transactions.map((transaction) => (
          <Transaction
            key={transaction.id}
            date={transaction.date}
            description={transaction.description}
            category={transaction.category}
            amount={transaction.amount}
          />
        ))}
      </tbody>
    </table>
  );
}

export default TransactionsList;
