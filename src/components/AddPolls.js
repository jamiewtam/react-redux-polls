import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { handlePollCreation } from "../actions/polls";

const AddPoll = () => {
  const [answers, setAnswers] = React.useState({
    a: "",
    b: "",
    c: "",
    d: "",
  });
  const [question, setQuestion] = React.useState({ question: "" });
  const history = useHistory();
  const dispatch = useDispatch();

  const handleChange = (value, letter) => {
    setAnswers((prevAnswers) => {
      return {
        ...prevAnswers,
        [letter]: value,
      };
    });
  };

  const handleQuestionChange = (event) => {
    setQuestion({ question: event.target.value });
  };

  const submitForm = (event) => {
    event.preventDefault();

    dispatch(
      handlePollCreation({
        ...question,
        ...answers,
        author: "tylermcginnis",
      })
    );
    history.push("/");
  };

  return (
    <form onSubmit={submitForm}>
      <label htmlFor="title">What's your questions</label>
      <input
        name="title"
        value={question.question}
        onChange={handleQuestionChange}
      />
      <p>What are the options?</p>
      <label htmlFor="optionA">A</label>
      <input
        name="optionA"
        value={answers.a}
        onChange={(event) => handleChange(event.target.value, "a")}
      />
      <label htmlFor="optionB">B</label>
      <input
        name="optionB"
        value={answers.b}
        onChange={(event) => handleChange(event.target.value, "b")}
      />
      <label htmlFor="optionC">C</label>
      <input
        name="optionC"
        value={answers.c}
        onChange={(event) => handleChange(event.target.value, "c")}
      />
      <label htmlFor="optionD">D</label>
      <input
        name="optionD"
        value={answers.d}
        onChange={(event) => handleChange(event.target.value, "d")}
      />
      <button type="submit">SUBMIT</button>
    </form>
  );
};

export default AddPoll;
