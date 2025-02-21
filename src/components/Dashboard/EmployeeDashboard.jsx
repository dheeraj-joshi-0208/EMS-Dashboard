import Header from "../../others/Header";
import TaskListNumbers from "../../others/TaskListNumbers";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = () => {
  return (
    <div className="pt-10 container mx-auto flex flex-col gap-10">
      <Header />
      <TaskListNumbers />
      <TaskList />
    </div>
  );
};

export default EmployeeDashboard;
