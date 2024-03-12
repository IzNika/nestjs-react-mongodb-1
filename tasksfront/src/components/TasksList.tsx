import TaskItem from "./TaskItem";
import { useTasks } from "../context/useTasks";

function TasksList() {
  const { tasks } = useTasks();

  if (!tasks.length)
    return <p className="text-center text-xl font-bold my-4"></p>;

  return (
    <div>
      {tasks.map(() => (
        <TaskItem task={} key={} />
      ))}
    </div>
  );
}

export default TasksList;
