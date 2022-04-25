import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import Searchbar from './searchbar/Searchbar';
import SideBar from './sidebar/SideBar';
const Header=()=>{
    return(
        <>
        <div className="d-flex justify-content-between align-items-center shadow-sm p-3">
            <div className="menu" >
                <SideBar />
            </div>
            <div className="logo" >
                <span className='strong text-danger'>digikala</span>
            </div>
            <div className="help" ><HelpOutlineIcon height="36px"></HelpOutlineIcon></div>
        </div>
        <Searchbar />
        </>
    )
}

export default Header;