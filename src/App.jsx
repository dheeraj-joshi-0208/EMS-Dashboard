import "./css/App.css";
// import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
// import AdminDashboard from "./components/Dashboard/AdminDashboard";

function App() {
  return (
    <>
      <div className="bg-[#141414] text-gray-200 min-h-screen">
        {/* <Login /> */}
        <EmployeeDashboard />
        {/* <AdminDashboard /> */}
      </div>
    </>
  );
}

export default App;
