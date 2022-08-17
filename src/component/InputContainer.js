// import { text } from "express";
// import "../APP.css";

function InputContainer({ setInputValue, inputValue, addTodoList }) {
  return (
    <>
      <section className="input_box">
        <input
          onChange={(event) => {
            setInputValue(event.target.value);
          }}
          value={inputValue}
          className="todo_input"
          type="text"
        />
        <button onClick={addTodoList}>추가</button>
      </section>
    </>
  );
}

export default InputContainer;
