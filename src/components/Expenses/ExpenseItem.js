/* eslint-disable react/prop-types */
import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  // array destrurcturing
  const [title, setTitle] = useState(props.title);

  console.log(
    "useState return items title and setTitle" + title + ", " + setTitle
  );
  console.log(title, setTitle);

  const clickHandler = () => {
    // allows the components restruct
    setTitle("Updated");
    console.log(title);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
