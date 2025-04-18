import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Feed from './pages/Feed';
import TopUsers from './pages/TopUsers';
import TrendingPosts from './pages/TrendingPosts';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="p-4">
        <Routes>
          <Route path="/" element={<Navigate to="/feed" />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/top-users" element={<TopUsers />} />
          <Route path="/trending-posts" element={<TrendingPosts />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
