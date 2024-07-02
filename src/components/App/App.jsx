import { task1 } from "../../homeworkjs1/task-1";
import { task2 } from "../../homeworkjs1/task-2";
import { task3 } from "../../homeworkjs1/task-3";

export default function App() {
  const tasks1 = task1(5, 1500);
  const tasks2 = task2("Ukraine", 580, 20);
  const tasks3 = task3("50px", "10px", "15px");

  return console.log(tasks3);
}
