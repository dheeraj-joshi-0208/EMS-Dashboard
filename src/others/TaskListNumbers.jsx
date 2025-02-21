const tasks = [
  { id: 1, title: "New Task", count: 0, bgColor: "bg-red-400" },
  { id: 2, title: "In Progress", count: 2, bgColor: "bg-blue-400" },
  { id: 3, title: "Completed", count: 5, bgColor: "bg-green-400" },
  { id: 4, title: "Pending", count: 3, bgColor: "bg-yellow-400" },
];

export default function TaskList() {
  return (
    <div className="flex flex-wrap justify-between gap-5 mt-10 font-bold text-[#141414]">
      {tasks.map((task) => (
        <div
          key={task.id}
          className={`py-6 px-9 w-full sm:w-[48%] rounded-xl ${task.bgColor}`}
        >
          <h2 className="text-2xl font-semibold">{task.count}</h2>
          <h3 className="text-xl font-medium">{task.title}</h3>
        </div>
      ))}
    </div>
  );
}
