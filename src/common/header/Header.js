import {Component} from "react";
import './Header.css';
import LogoName from '../../assets/logo.svg';
class Header extends Component{
    render() {
        return(
            <div className="header">
              <img class="logo" src={LogoName} alt="logo" />
            </div>
        )
    }
}

export default Header;