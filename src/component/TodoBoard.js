import TodoItem from "./TodoItem";
function TodoBoard({ todoList, deleteTodoList }) {
  return (
    <>
      <div className="todo_box">
        <h1>My Trip Todo List</h1>
        <ul className="todo_container">
          {todoList.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              deleteTodoList={deleteTodoList}
            />
          ))}
        </ul>
      </div>
    </>
  );
}
export default TodoBoard;
