import { NavLink, useParams } from "react-router-dom";
import { Link} from "react-router-dom";

const items = [
  {name: "character", to:"/"},
  {name: "location", to:"/"},
  {name: "episode", to:"/"}

]

const Navigation = () => {
    const params = useParams();
    return ( 
      <header>
        <nav>
          <ul>
            {items.map((item) => {
              return(
                <li key={item.to}>
                  <NavLink 
                    to={item.to}
                    className={(navData) => (navData.isActive ? "activeLink" : "")}
                  >
                    {item.name}
                  </NavLink>
                </li>
              )
              
            })}
          </ul>
        </nav> 
      </header>
     );
}
 
export default Navigation;