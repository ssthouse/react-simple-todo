import React, { useState } from "react";
import "./styles.css";

const TaskItem = ({
  name,
  isDone,
  onDelete,
  onDone
}: {
  name: string;
  isDone: boolean;
  onDelete: Function;
  onDone: Function;
}) => {
  return (
    <div style={{ display: "flex", color: isDone ? "gray" : "blue" }}>
      <div style={{ opacity: isDone ? 0.2 : 1 }}>{name}</div>
      <button onClick={() => onDelete()}>delete</button>
      <button disabled={isDone} onClick={() => onDone()}>
        done
      </button>
    </div>
  );
};
export default function App() {
  const [tasks, setTasks] = useState([
    { name: "111", isDone: false },
    { name: "222", isDone: true }
  ]);
  return (
    <div className="App">
      {tasks.map((taskItem, index) => {
        return (
          <TaskItem
            name={taskItem.name}
            isDone={taskItem.isDone}
            onDelete={() => {
              tasks.splice(index, 1);
              setTasks([...tasks]);
            }}
            onDone={() => {
              tasks[index].isDone = true;
              setTasks([...tasks]);
            }}
          ></TaskItem>
        );
      })}
    </div>
  );
}
