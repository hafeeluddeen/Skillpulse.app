import './App.css';
import Dashboard from './Components/Dashboard';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import TestQNA from './Components/TestQNA';
import { cnEntryTest } from './Data/QNA Entry Tests/ALL_ENTRY_TEST';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route index element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<h1>404 PAGE NOT FOUND</h1>} />
        </Route>
        <Route path="/test" element={<TestQNA questions={cnEntryTest} />} />
      </Routes>
    </Router>
  );
}

export default App;
