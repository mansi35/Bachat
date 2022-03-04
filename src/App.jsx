import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
import Auth from './pages/Auth/Auth';
import './App.scss';
import Sidebar from './components/Sidebar/Sidebar';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import UserDashboardPage from './pages/UserDashboardPage/UserDashboardPage';
import UserProfilePage from './pages/UserProfilePage/UserProfilePage';

function App() {
  return (
    <SnackbarProvider maxSnack={3}>
      <Router>
        <div className="App">
          <Sidebar />
          <Routes>
            <Route exact path="/auth" element={<Auth />} />
            <Route exact path="/" element={<ProtectedRoute component={UserDashboardPage} />} />
            <Route exact path="/profile" element={<ProtectedRoute component={UserProfilePage} />} />
          </Routes>
        </div>
      </Router>
    </SnackbarProvider>
  );
}

export default App;
