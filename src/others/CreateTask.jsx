const CreateTask = () => {
  return (
    <div className="mt-15 max-w-4xl mx-auto shadow-2xl border-amber-50 border-2 rounded-2xl p-8">
      <h2 className="text-3xl font-semibold mb-6 text-center">
        Create a New Task
      </h2>
      <form className="flex flex-wrap gap-6">
        {/* Task Title */}
        <div className="flex flex-col flex-1 min-w-[280px]">
          <label htmlFor="task" className="text-lg font-medium">
            Task Title
          </label>
          <input
            type="text"
            name="task"
            id="task"
            placeholder="Enter task title..."
            required
            className="p-3 border border-gray-300 rounded-lg mt-1 focus:ring-2 focus:ring-blue-500 transition"
          />
        </div>

        {/* Description */}
        <div className="flex flex-col flex-1 min-w-[280px]">
          <label htmlFor="description" className="text-lg font-medium">
            Description
          </label>
          <textarea
            name="description"
            id="description"
            rows="4"
            placeholder="Task details..."
            className="p-3 border border-gray-300 rounded-lg mt-1 focus:ring-2 focus:ring-blue-500 transition"
          ></textarea>
        </div>

        {/* Date */}
        <div className="flex flex-col flex-1 min-w-[280px]">
          <label htmlFor="date" className="text-lg font-medium">
            Due Date
          </label>
          <input
            type="date"
            id="date"
            name="date"
            className="p-3 border border-gray-300 rounded-lg mt-1 focus:ring-2 focus:ring-blue-500 transition"
          />
        </div>

        {/* Assigned To */}
        <div className="flex flex-col flex-1 min-w-[280px]">
          <label htmlFor="assignedTo" className="text-lg font-medium">
            Assigned To
          </label>
          <input
            type="text"
            id="assignedTo"
            name="assignedTo"
            placeholder="Employee Name"
            className="p-3 border border-gray-300 rounded-lg mt-1 focus:ring-2 focus:ring-blue-500 transition"
          />
        </div>

        {/* Category */}
        <div className="flex flex-col flex-1 min-w-[280px]">
          <label htmlFor="category" className="text-lg font-medium">
            Category
          </label>
          <input
            type="text"
            id="category"
            name="category"
            placeholder="Design, Dev, etc."
            className="p-3 border border-gray-300 rounded-lg mt-1 focus:ring-2 focus:ring-blue-500 transition"
          />
        </div>

        {/* Submit Button */}
        <div className="w-full flex justify-center mt-6">
          <button
            type="submit"
            className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 text-lg font-semibold rounded-lg shadow-md hover:scale-105 transition-transform duration-200 cursor-pointer"
          >
            Create Task 🚀
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
