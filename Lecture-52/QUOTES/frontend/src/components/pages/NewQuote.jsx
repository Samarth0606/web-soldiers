import React, { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function NewQuote() {
  let navigate = useNavigate();
  let usernameInputRef = useRef();
  let quoteInputRef = useRef();

  async function addQuoteHandler(e) {
    e.preventDefault();
    let author = usernameInputRef.current.value;
    let text = quoteInputRef.current.value;

    try {
      let res = await axios.post("http://localhost:8000/addquotes", {
        author,
        text,
      });
      navigate("/");
    } catch (e) {
      console.log("canot crete a quote");
    }
  }

  return (
    <div>
      <form onSubmit={addQuoteHandler}>
        <div>
          <label htmlFor="naam">Author:</label>
          <input
            type="text"
            placeholder="Author's Name"
            id="naam"
            ref={usernameInputRef}
          />
        </div>
        <div>
          <label htmlFor="textt">Quote:</label>
          <textarea
            id="textt"
            cols="30"
            rows="4"
            placeholder="Author's Quote"
            ref={quoteInputRef}
          ></textarea>
          <button>Add Quote</button>
        </div>
      </form>
    </div>
  );
}

export default NewQuote;
