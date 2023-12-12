export default function Todo({ todo, index, deleteTodo, completeTodo }) {
  return (
    <div style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>
      <li key={index}> {todo.title} </li>
      <button
        onClick={() => {
          deleteTodo(todo);
        }}
      >
        Delete
      </button>
      <button
        onClick={() => {
          completeTodo(index);
        }}
      >
        Complete
      </button>
    </div>
  );
}
