
import './Tab2.css';
import Login from '../components/Login';
import Dashboard from '../components/Dashboard';

const code = new URLSearchParams(window.location.search).get('code')
const Tab2: React.FC = () => {
  
  return (
    
    code ? <Dashboard code={code} /> : <Login />
      
  );
};

export default Tab2;
