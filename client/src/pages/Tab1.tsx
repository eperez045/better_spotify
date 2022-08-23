
import Login from '../components/Login';
import './Tab1.css';
import Dashboard from '../components/Dashboard';

const code = new URLSearchParams(window.location.search).get('code')
const Tab1: React.FC = () => {
  return (
    code ? <Dashboard code={code} /> : <Login />
  );

};

export default Tab1;
