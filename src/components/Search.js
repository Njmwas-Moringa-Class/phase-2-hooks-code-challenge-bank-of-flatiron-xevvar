import React from "react";

function Search({onSearch, searchTerm}) {

  function handleInputChange (event) {
    searchTerm = event.target.value;
    onSearch(searchTerm);
  };


  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder="Search your Recent Transactions"
        onChange={handleInputChange}
      />
      <i className="circular search link icon"></i>
    </div>
  );
}

export default Search;
