import { useState } from "react"
import MenuIcon from '@mui/icons-material/Menu';
import './sidebar.scss';
const SideBar=()=>{
    const [sidebarIsOpen , setSidebarIsOpen] = useState(false);
    return(
       <div className={`app-sidebar ${sidebarIsOpen ? 'open' : ''}`}>
           <div className={`app-sidebar__toggler`} onClick={() => setSidebarIsOpen(true)}>
                <MenuIcon height="36px"></MenuIcon>
           </div>
           <div className="app-sidebar__items">
               <ul>
                   <li>logo</li>
                   <li>item1</li>
                   <li>item2</li>
               </ul>
           </div>
           <div className="app-sidebar__overlay" onClick={() => setSidebarIsOpen(false)}></div>
       </div>
    )
}

export default SideBar;