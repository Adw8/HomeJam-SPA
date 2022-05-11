import './App.css';
// import bgimg from './images/bgimg.png';
import homeJamLogo from './images/homeJamLogo.png';
import {HiOutlineSearch} from 'react-icons/hi';
import {FiShoppingBag} from 'react-icons/fi';
import {BsSuitHeart} from 'react-icons/bs';

function App() {
  return (
    <>
    {/* <div> <img src = {bgimg}></img> */}
    <div className='container-navbar'>
      <img className='homeJamLogo'src={homeJamLogo} alt = 'logo'/>
      <div className='logo'>
        <div><HiOutlineSearch size={".8rem"}/>  Search </div> 
        <div> Help </div> 
        <div> Account </div> 
        <div><FiShoppingBag size = {".8rem"}></FiShoppingBag></div>
      </div>
    </div>
    <div className='header-title'>
      Cari Cari
    </div>
    <div className='header-body'>
      Live from their sofa to yours. Get closer to your favorite artists, and never miss out
    </div>
    <div class="circle-container">
      <div class='circle' font = 'Nunito' color='white' > Label1</div>
      <div class='circle' font = 'Nunito' color='white' >Label2</div>
      <div class='circle' font = 'Nunito' color='white' >Label3</div>
      <div class='circle' font = 'Nunito' color='white' >Label4</div>
   </div>
    
    </>
  );
};

export default App;
