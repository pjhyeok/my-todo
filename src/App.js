import "./App.css";
import React from "react";
import { useState, useEffect } from "react";
// import ReactDOM from 'react-dom/client';
import Header from "./component/Header";
import InputContainer from "./component/InputContainer";
import TodoBoard from "./component/TodoBoard";

// 1. 인풋창 만들기 (O)
// 2. 인풋창에 입력한 값 읽는 방법(O)
// 3. 버튼 클릭 이벤트 함수 만들기
// 4.  컴포넌트 만들기
// 5. 스타일 만들기
// 6. 할일 리스트 보여주기

function App() {
  const url = "http://localhost:3001/todos";
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodolist] = useState([]);

  useEffect(() => {
    getTodoList();
  }, []);

  //GET 요청
  const getTodoList = () => {
    return fetch(url, {
      method: "GET",
      headers: { "Content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTodolist(data);
      });
  };

  //POST 요청
  const addTodoList = () => {
    const newTodoList = {
      content: inputValue,
      createdAt: new Date().toISOString(),
    };
    return fetch(url, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(newTodoList),
    }).then(() => getTodoList());
  };

  // DELETE 요청
  const deleteTodoList = (id) => {
    // console.log(`${url}/${id}`);
    return fetch(`${url}/${id}`, {
      method: "DELETE",
      headers: { "Content-type": "application/json" },
    }).then((res) => {
      if (res.status === 202 || 204) {
        getTodoList();
      }
    });
  };

  return (
    <>
      <header>
        <Header />
      </header>
      <main className="main">
        <InputContainer
          setInputValue={setInputValue}
          inputValue={inputValue}
          addTodoList={addTodoList}
        />
        <TodoBoard deleteTodoList={deleteTodoList} todoList={todoList} />
      </main>
    </>
  );
}

export default App;
