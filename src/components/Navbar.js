import React, { Component } from 'react'
import logo from '../images/logo.svg';
import {FaAlignRight} from 'react-icons/fa';
import {Link} from 'react-router-dom';

export default class Navbar extends Component {

    propTypes(){
        return {
            children: React.PropTypes.any,
        }
    }
    state={
        isOpen:false
    }
    handleToggle = () => {
        this.setState({isOpen:!this.state.isOpen})
    }
    componentDidMount(){
        window.addEventListener('scroll', () => {
            let activeClass = 'normal';
            if (window.scrollY === 0){
                activeClass = 'transparent';
            }
            this.setState({activeClass});
        })
    }
    render() {
        return (
            <nav className={`navbar ${this.state.activeClass}`}>
                <div className="nav-center">
                    <div className="nav-header">
                        <Link to="/">
                            <img src={logo} alt="Beach Resort"/>
                            </Link>
                        <button type="button" className="nav-btn" onClick={this.handleToggle}>
                            <FaAlignRight className="nav-icon" />
                        </button>
                    </div>
                    <ul className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/rooms">Rooms</Link>
                    </li>
                    <li>
                        <Link to="/services">Services</Link>
                    </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
