import { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

const Dictionary = () => {
  const [keyword, setKeyword] = useState("");

  const inputHandle = (event) => {
    setKeyword(event.target.value);
  };

  const search = (event) => {
    event.preventDefault();
    alert(`Searching... ${keyword}`);
  };
  return (
    <>
      <div className="dictionary">
        <form onSubmit={search}>
          <input type="search" autoFocus={true} onChange={inputHandle} />
        </form>
      </div>
    </>
  );
};
export default Dictionary;
