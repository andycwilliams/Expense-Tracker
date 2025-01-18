export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-blue-700 text-white">
      <h1 className="text-4xl font-bold mb-4">Expense Tracker</h1>
      <p className="text-lg text-center max-w-md mb-8">
        Take complete control of your finances with this simple and intuitive
        expense tracking app. Guaranteed to save you a bazillion dollars
        (weekly!)
      </p>

      <div className="bg-blue-700 p-6 rounded-lg w-full max-w-md mb-8 shadow-lg">
        <p className="text-gray-300 text-sm text-center">
          No expenses yet. Start tracking by adding your first expense!
        </p>
      </div>

      <div className="flex space-x-4">
        <button className="px-5 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded">
          Start Saving
        </button>
        <button className="px-5 py-2 bg-gray-800 hover:bg-gray-900 text-white rounded">
          Quit and Lose Money
        </button>
      </div>
    </div>
  );
}
