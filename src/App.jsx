import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './admin/components/Dashboard';
import Sidebar from './admin/components/Sidebar';
import Navbar from './admin/components/Navbar';
import Footer from './admin/components/Footer';
import ViewUser from './admin/user/ViewUser';
import CreateUser from './admin/user/CreateUser';
import CardComponent from './admin/user/CardComponent';
import Login from './accounts/Login';
import ViewGame from './admin/game/ViewGame';
import CreateGame from './admin/game/CreateGame';
import EditGame from './admin/game/EditGame';

import Home from './marketplace/Home';
import GameMenu from './marketplace/GameMenu';

function App() {
  return (
    <Router>
      <Routes>
        {/* Define the route for the login page outside the main structure */}
        <Route path="/" element={<Login />} />

        <Route path="/home" element={<Home />} />
        <Route path="/game" element={<GameMenu />} />
        
        {/* Define the main application structure */}
        <Route path="*" element={
          <div className="flex flex-col min-h-screen">
            <Sidebar /> {/* Menambahkan Sidebar */}
            <div className="flex-1 flex flex-col">
              <Navbar /> {/* Menambahkan Navbar */}
              <main className="flex-1 p-6 ml-64"> {/* Adjusted margin-left to accommodate the sidebar */}
                <Routes>
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/user" element={<ViewUser />} />
                  <Route path="/user/create" element={<CreateUser />} />
                  <Route path="/user/create" element={<CreateUser />} />

                  <Route path="/admin/games" element={<ViewGame />} />
                  <Route path="/admin/games/create" element={<CreateGame />} />
                  <Route path="/admin/games/edit/:id" element={<EditGame />} />
          
                  <Route path="/card" element={<CardComponent />} />
                  {/* Tambahkan rute lain di sini */}
                </Routes>
              </main>
            </div>
            <Footer />
          </div>
        } />
      </Routes>
  </Router>
  );
}

export default App;
