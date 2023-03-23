import React, { useState } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useOverallContext } from "../context/OverAllContext";

const Forms = () => {
  const { AddToDataBase } = useOverallContext();
  const [inputValue, setInputvalue] = useState({
    title: "",
    amount: "",
    type: "income",
    category: "",
    description: "",
    date: "",
  });

  const { title, amount, date, category, description } = inputValue;

  const handleInput = (name) => (e) => {
    setInputvalue({ ...inputValue, [name]: e.target.value });
    console.log(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    AddToDataBase(inputValue);
    console.log("called");
    setInputvalue({
      title: "",
      amount: "",
      date: "",
      category: "",
      description: "",
    });
  };

  return (
    <FormStyled>
      <div className="input-control">
        <input
          type="text"
          value={title}
          name={"title"}
          placeholder={"salary income"}
          onChange={handleInput("title")}
        />
      </div>

      <div className="input-control">
        <input
          type="text"
          value={amount}
          name={"amount"}
          placeholder={"salary amount"}
          onChange={handleInput("amount")}
        />
      </div>

      <div className="input-control">
        <DatePicker
          id="date"
          placeholderText="Enter the date"
          selected={date}
          dateFormat="dd/MM/yyy"
          onChange={(date) => {
            setInputvalue({ ...inputValue, date: date });
          }}
        />
      </div>

      <div className="selects  input-control">
        <select
          required
          value={category}
          name="category"
          id="category"
          onChange={handleInput("category")}
        >
          <option value="" disabled>
            Select
          </option>
          <option value="salary">salary</option>
          <option value="freelance">Freelance</option>
          <option value="investment">Investment</option>
          <option value="bank">Bank</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="input-control">
        <textarea
          name="description"
          value={description}
          placeholder="Description"
          id="description"
          cols="30"
          rows="4"
          onChange={handleInput("description")}
        ></textarea>
      </div>

      <div className="submit-btn">
        <button type="submit" onClick={handleSubmit}>
          Add Income
        </button>
      </div>
    </FormStyled>
  );
};

const FormStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;

  input,
  textarea,
  select {
    font-family: inherit;
    width: 50%;
    font-size: inherit;
    outline: none;
    border: none;
    padding: 0.4rem;
    border-radius: 7px;
    background: transperent;
  }

  .input-control {
    input {
      width: 50%;
    }
  }

  .submit-btn {
    button {
      background-image: linear-gradient(
        to right,
        #76f27f,
        #72f37b,
        #6ef578,
        #6af674,
        #66f770,
        #64f66e,
        #62f46d,
        #60f36b,
        #60ee6b,
        #61e96a,
        #61e56a,
        #61e069
      );
      color: black;
      font-family: inherit;
      width: 20%;
      height: 3rem;
      border-radius: 3rem;

      &:hover {
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
    }
  }
`;

export default Forms;
