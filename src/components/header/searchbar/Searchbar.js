import './searchbar.scss';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useState } from 'react';

const Searchbar=()=>{
    const [openSearchbar,setOpenSearchbar] = useState(false);
    return(
        <div className="d-flex justify-content-between align-items-center shadow-sm p-3">
            <div className={`searchbox`}>
                <div className='searchbox__icon' onClick={()=> setOpenSearchbar(true)}>
                    <div className='d-flex justify-content-right align-items-center p-2'>
                        <SearchIcon height="20px"></SearchIcon>
                        <div className='small'>جستجو</div>
                    </div>
                </div>
               
                <div className={`searchbox__item  ${openSearchbar ? 'open' : ''}  `}>
                    <div className='searchbox__content'>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group" id="basic-addon1" onClick={()=> setOpenSearchbar(false)}>
                                    <ArrowBackIcon height="36"></ArrowBackIcon>
                                </span>
                            </div>
                            <input type="text" className="searcinput" placeholder="search" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <ExitToAppIcon height="36px"></ExitToAppIcon>ورود
            </div>
            <div>
                <ShoppingCartIcon height="36px"></ShoppingCartIcon>
            </div>
        </div>
    )
}

export default Searchbar;