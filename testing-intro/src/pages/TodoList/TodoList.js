import React, { useState } from "react";
import { toast } from "react-toastify";

export const TodoList = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [tasks, setTasks] = useState([]);

  return (
    <article>
      <h1>TodoList</h1>
      <input
        type="text"
        placeholder="Enter title of the task"
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter description"
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
      />
      <button
        onClick={() => {
          if (tasks.some((task) => task.title === taskTitle)) {
            toast("Hej taki task już istnieje!", { type: "error" });
          } else if (taskTitle.trim().length < 3) {
            toast("Ten task to nie słowo!", { type: "error" });
          } else {
            const task = {
              title: taskTitle,
              description: taskDescription,
              id: Math.random(),
            };
            setTasks((prevTasks) => [...prevTasks, task]);
            setTaskTitle("");
            setTaskDescription("");
          }
        }}
      >
        Submit
      </button>
      <hr />
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tasks.length === 0 && (
            <tr>
              <td colSpan={3} style={{ textAlign: "center" }}>
                Nie dodałeś żadnego taska
              </td>
            </tr>
          )}
          {tasks.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.title}</td>
              <td>{todo.description}</td>
              <td>
                <button
                  onClick={() => {
                    setTasks((prevTodos) =>
                      prevTodos.filter((_todo) => _todo.id !== todo.id)
                    );
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </article>
  );
};
