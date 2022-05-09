/* eslint-disable react/react-in-jsx-scope */
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Table from './components/Table';
import GroupedTable from './components/GroupedTable';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Table />} />
        <Route path="/group" element={<GroupedTable />} />
      </Routes>
    </Router>

  );
}

export default App;
