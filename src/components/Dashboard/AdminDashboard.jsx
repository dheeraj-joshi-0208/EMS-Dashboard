import CreateTask from "../../others/CreateTask";
import Header from "../../others/Header";

const AdminDashboard = () => {
  return (
    <>
      <div className="pt-10 container mx-auto min-h-screen">
        <Header />
        <CreateTask />
      </div>
    </>
  );
};

export default AdminDashboard;
