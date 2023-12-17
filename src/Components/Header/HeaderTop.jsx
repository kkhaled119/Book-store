import {Link} from 'react-router-dom'

const HeaderTop = ({setToggle,toggle})=>{
    return(
        <div className="header-top">
        <div onClick={()=>setToggle(prev=>!prev)} className="header-top-menu">
         {toggle? <i className="bi bi-x-lg"></i>: <i className="bi bi-list"></i>}
        </div>
        <div className="header-top-phone">
          <i className="bi bi-telephone"></i>
          010-11-92-72-89
        </div>
        <div className="header-top-text">Welcome To OnLine Book Store</div>
        <Link to={"/login"} className="header-top-link">
          <i className="bi bi-person-fill"></i>
          Login
        </Link>
      </div>
    )
}

export default HeaderTop;