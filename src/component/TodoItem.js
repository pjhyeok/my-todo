function TodoItem({ todo, deleteTodoList }) {
  const { id, content, createdAt } = todo;

  return (
    <>
      <li className="item_box">
        <div className="item_content">
          <h2>{content}</h2>
        </div>
        <div className="item_date">
          {new Date(createdAt).toLocaleTimeString()}
        </div>
        <button onClick={() => deleteTodoList(id)}>삭제</button>
      </li>
    </>
  );
}

export default TodoItem;
