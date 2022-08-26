import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import SideBar from './SideBar';
import NavBar from './NavBar';
import ProductList from './ProductList';
import Main from './Views/Main';
import WelcomeVideo from './WelcomeVideo';

const DashBoard = (props) => {
  const navigate = useNavigate();

  return (
    <div className=" bg-cyan-600 bg-cover">
            <NavBar />
            <div className='flex'>
                <ProductList/>
                <SideBar/>
            </div>
        </div>
    );
};

export default DashBoard;