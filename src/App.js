import './App.css';
// import bgimg from './images/bgimg.png';
import homeJamLogo from './images/homeJamLogo.png';
import {HiOutlineSearch} from 'react-icons/hi';
import {FiShoppingBag} from 'react-icons/fi';

import Benny from './images/Benny.png';
import Shilpa from './images/Shilpa.png';
import Vijay from './images/Vijay.png';
import Andrea from './images/Andrea.png';
import Hellen from './images/Hellen.png';
import Issac from './images/Issac.png';
import Afro from './images/Afro.png';

import Card from './components/Card';
import Review from './components/Review';

function App() {
  return (
    <>
    <div className='bg'>
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
        <div class='circle' font = 'Nunito' color='white' >Label1</div>
        <div class='circle' font = 'Nunito' color='white' >Label2</div>
        <div class='circle' font = 'Nunito' color='white' >Label3</div>
        <div class='circle' font = 'Nunito' color='white' >Label4</div>
      </div> 
   </div>
  <div className='body2'>
    <div className='title-bar'>
    <div className='header'>Upcoming Shows</div>
    <div className='yellow-link'>View All</div>
    </div>
   <div  className='fcontainer'>
   <Card image = {Benny} tag="Folk" name="Benny Dayal" />
   <Card image = {Vijay}tag="Bollywood" name="Vijay Yesudas" />
   <Card image = {Andrea} tag="Folk" name="Andrea Jeremiah" />
   <Card image = {Shilpa}tag="Folk" name="Shilpa Rao" />
   {/* </div> */}
   </div>
   </div>
   <div className='body2'>
   <div className='title-bar'>
    <div className='header'>Reviews</div>
    <div className='yellow-link'>View All</div>
    </div>
    <div  className='fcontainer'>
      <Review image = {Hellen} name = "Hellen Jummy"/>
      <Review image = {Issac} name = "Issac Oluwatemilorun"/>
      <Review image = {Afro} name = " Thomas jeffrey"/>
    </div>
    </div>
    </>
  );
};

export default App;
