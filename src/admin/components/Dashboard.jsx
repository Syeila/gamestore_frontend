import React from 'react';

const Card = ({ title, value }) => (
  <div className="bg-gray-800 p-4 rounded-lg shadow-md">
    <h2 className="text-xl font-semibold">{title}</h2>
    <p className="mt-2 text-2xl font-bold">{value}</p>
  </div>
);

const TransactionRow = ({ id, user, game, amount, date }) => (
  <tr>
    <td className="py-3 px-4">{id}</td>
    <td className="py-3 px-4">{user}</td>
    <td className="py-3 px-4">{game}</td>
    <td className="py-3 px-4">{amount}</td>
    <td className="py-3 px-4">{date}</td>
  </tr>
);

const Dashboard = () => {
  return (
    <div className="p-6 sm:p-10 bg-blue-500 text-white">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      {/* Card Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card title="Total Sales" value="$120,000" />
        <Card title="New Users" value="150" />
        <Card title="Games Sold" value="450" />
        <Card title="Active Subscriptions" value="300" />
      </div>

      {/* Recent Transactions */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Recent Transactions</h2>
        <table className="w-full bg-gray-800 rounded-lg shadow-md">
          <thead className="bg-gray-700">
            <tr>
              <th className="py-3 px-4 text-left">Transaction ID</th>
              <th className="py-3 px-4 text-left">User</th>
              <th className="py-3 px-4 text-left">Game</th>
              <th className="py-3 px-4 text-left">Amount</th>
              <th className="py-3 px-4 text-left">Date</th>
            </tr>
          </thead>
          <tbody>
            <TransactionRow id="#TXN12345" user="John Doe" game="Game A" amount="$59.99" date="2024-08-27" />
            <TransactionRow id="#TXN12346" user="Jane Smith" game="Game B" amount="$39.99" date="2024-08-27" />
            {/* Tambahkan lebih banyak transaksi di sini */}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;
