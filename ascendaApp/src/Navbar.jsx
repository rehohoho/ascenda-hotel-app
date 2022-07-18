import React from "react";
import { Nav, NavItem} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import "./Navbarstyle.css"
import "./ascendaLogo.svg"

const Navbar = (props) => {
	return (
      <nav className="navbar navbar-expand-md sticky-top" 	role="navigation">
        <div className="header"> {/*container-fluid*/}
            <a className="navbar-brand" href="#">
              <svg xmlnsXlink="http://www.w3.org/1999/xlink" width="120" height="24" id="Ascenda Loyalty logo" data-name="Ascenda Loyalty logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 63" fill="#fff"><path class="cls-1" d="M84.38,33A10.77,10.77,0,0,0,81,30.14a9.66,9.66,0,0,0-4.76-1.21,9.19,9.19,0,0,0-4.14.93A3.23,3.23,0,0,0,70.18,33a3.14,3.14,0,0,0,2.07,3.08,37,37,0,0,0,6,1.83,34.06,34.06,0,0,1,4.26,1.25,15.44,15.44,0,0,1,3.9,2.06,10.18,10.18,0,0,1,2.85,3.2A9.25,9.25,0,0,1,90.39,49a12.05,12.05,0,0,1-1.29,5.81,10.9,10.9,0,0,1-3.43,3.85,14.41,14.41,0,0,1-5,2.15,26,26,0,0,1-5.89.66,23.27,23.27,0,0,1-8.5-1.6,17.85,17.85,0,0,1-6.87-4.56l6.16-5.76a12.33,12.33,0,0,0,4.06,3.35,11.68,11.68,0,0,0,5.54,1.32A9.87,9.87,0,0,0,77.24,54a7.15,7.15,0,0,0,2-.74,4,4,0,0,0,1.44-1.36,3.83,3.83,0,0,0,.55-2.11A3.46,3.46,0,0,0,79,46.46a35.25,35.25,0,0,0-6.43-2,31.2,31.2,0,0,1-4.1-1.2A13.65,13.65,0,0,1,65,41.28a9.21,9.21,0,0,1-2.5-3,9.6,9.6,0,0,1-.93-4.44,10.68,10.68,0,0,1,1.28-5.38,11,11,0,0,1,3.4-3.7A15,15,0,0,1,71,22.62a21.18,21.18,0,0,1,5.46-.7,22.87,22.87,0,0,1,7.92,1.4,13.39,13.39,0,0,1,6.13,4.28L84.38,33Zm38.13.39a8.19,8.19,0,0,0-3.27-2.61,10.19,10.19,0,0,0-4.45-1.05,9.41,9.41,0,0,0-4.53,1.05A9.76,9.76,0,0,0,107,33.53a12.07,12.07,0,0,0-1.91,3.85,15.63,15.63,0,0,0-.62,4.33,14.62,14.62,0,0,0,.66,4.32,12.1,12.1,0,0,0,2,3.86,10.3,10.3,0,0,0,3.32,2.77,9.77,9.77,0,0,0,4.64,1.05,11.92,11.92,0,0,0,4.37-.86A8.26,8.26,0,0,0,123,50.36l5.85,5.92a15.55,15.55,0,0,1-6,3.86A22.26,22.26,0,0,1,115,61.5a22.93,22.93,0,0,1-7.84-1.33A18.26,18.26,0,0,1,96.33,50.05a20.81,20.81,0,0,1-1.6-8.34,20.3,20.3,0,0,1,1.6-8.18,18.81,18.81,0,0,1,4.33-6.24,19.31,19.31,0,0,1,6.36-4,21.83,21.83,0,0,1,15.77.15,15.14,15.14,0,0,1,6.12,4.29l-6.4,5.61ZM159.79,38a11.44,11.44,0,0,0-.51-3.43,7.83,7.83,0,0,0-1.6-2.88,7.67,7.67,0,0,0-2.77-2,9.75,9.75,0,0,0-3.94-.74,10.52,10.52,0,0,0-7.14,2.53A9.25,9.25,0,0,0,140.59,38Zm9.36,4.21v1.24a8.75,8.75,0,0,1-.08,1.25H140.59a9.34,9.34,0,0,0,1.06,3.7A9.18,9.18,0,0,0,144,51.25a11.63,11.63,0,0,0,3.35,1.91,11,11,0,0,0,3.9.7,12.59,12.59,0,0,0,5.93-1.28,11,11,0,0,0,4-3.55l6.25,5q-5.55,7.48-16.08,7.48a23.15,23.15,0,0,1-8-1.36A19.14,19.14,0,0,1,137,56.28a17.46,17.46,0,0,1-4.21-6.12,21.1,21.1,0,0,1-1.52-8.22,21.53,21.53,0,0,1,1.52-8.22,18.75,18.75,0,0,1,4.18-6.31,18.56,18.56,0,0,1,6.28-4.05,21.06,21.06,0,0,1,7.84-1.44,19.75,19.75,0,0,1,7.22,1.28A15.64,15.64,0,0,1,164,27a17.61,17.61,0,0,1,3.79,6.31,26,26,0,0,1,1.36,8.85ZM176.9,23h8.9v6H186a12.06,12.06,0,0,1,4.33-5,12.42,12.42,0,0,1,7.29-2.14,14,14,0,0,1,6.28,1.28,12.42,12.42,0,0,1,4.3,3.39,13.78,13.78,0,0,1,2.45,4.83,20.32,20.32,0,0,1,.78,5.61V60.41H202V39.68a27.69,27.69,0,0,0-.23-3.43,9.34,9.34,0,0,0-1-3.23,6.78,6.78,0,0,0-2.14-2.38,6.34,6.34,0,0,0-3.63-.93,8.08,8.08,0,0,0-3.9.89,8.41,8.41,0,0,0-2.7,2.3,10.44,10.44,0,0,0-1.6,3.24,13,13,0,0,0-.54,3.7V60.41H176.9V23Zm81.35,37.4h-8.9V54.8h-.15a12.84,12.84,0,0,1-5.43,5,16.63,16.63,0,0,1-7.45,1.71,17.5,17.5,0,0,1-13.46-5.88,19.06,19.06,0,0,1-3.67-6.32,22.88,22.88,0,0,1-1.29-7.75,22.14,22.14,0,0,1,1.33-7.71A18.87,18.87,0,0,1,223,27.6a17.41,17.41,0,0,1,13.11-5.68,16.34,16.34,0,0,1,8.15,2,13.76,13.76,0,0,1,2.61,1.87,15.58,15.58,0,0,1,1.8,2h.23V1.5h9.37V60.41ZM227.42,41.55a15.06,15.06,0,0,0,.67,4.37,11.85,11.85,0,0,0,2,3.89,10.46,10.46,0,0,0,3.35,2.81,10.79,10.79,0,0,0,9.37,0,11.45,11.45,0,0,0,3.47-2.77A12,12,0,0,0,248.45,46a13,13,0,0,0,.75-4.32,13.39,13.39,0,0,0-.75-4.37,11.83,11.83,0,0,0-5.65-6.7,9.69,9.69,0,0,0-4.61-1.09,10.22,10.22,0,0,0-4.76,1.05,10,10,0,0,0-3.35,2.77,11.9,11.9,0,0,0-2,3.86,14.63,14.63,0,0,0-.67,4.32Zm63,14.11h-.24a10.44,10.44,0,0,1-4.52,4.09,15.43,15.43,0,0,1-7.1,1.59,20.3,20.3,0,0,1-4.72-.58,14.08,14.08,0,0,1-4.53-1.95,11.3,11.3,0,0,1-3.43-3.58,10.31,10.31,0,0,1-1.37-5.5,9.29,9.29,0,0,1,2.38-6.7,15.52,15.52,0,0,1,6.13-3.82,34.78,34.78,0,0,1,8.31-1.75c3-.28,6-.43,8.93-.43V36.1a5.76,5.76,0,0,0-2.53-5.18,10.71,10.71,0,0,0-6-1.68,13.59,13.59,0,0,0-5.7,1.25,15.11,15.11,0,0,0-4.52,3l-4.84-5.69A20.93,20.93,0,0,1,274,23.4a25.14,25.14,0,0,1,8.47-1.48,20.74,20.74,0,0,1,8.23,1.4,12.82,12.82,0,0,1,7.73,8.73,22.06,22.06,0,0,1,.74,5.61V60.41h-8.74V55.66Zm1-12.32h-2.11c-1.51,0-3.09.07-4.76.2a20.2,20.2,0,0,0-4.6.86,9.63,9.63,0,0,0-3.51,1.87,4.12,4.12,0,0,0-1.41,3.31,4.07,4.07,0,0,0,.58,2.22,4.49,4.49,0,0,0,1.53,1.44,6.92,6.92,0,0,0,2.1.78,12.37,12.37,0,0,0,2.34.23c3.23,0,5.68-.85,7.34-2.57a9.65,9.65,0,0,0,2.5-7V43.34Z" fill="#FFFFFF"></path><path class="cls-1" d="M24.8,6.19h8.49L57.05,61H45.83L40.61,48.36Q30.38,61,11,61H.8l24-54.84Zm12.1,33L28.79,17.77,13.59,52.44A26.28,26.28,0,0,0,27,49.13a26,26,0,0,0,9.89-9.94Z" fill="#FFFFFF"></path></svg>
            </a>
            <Nav className="mr-auto">
              <NavItem>
                <NavLink to="/" className="nav-link">
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/hotelsearch" className="nav-link">
                  Hotel Search
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/hoteldetails" className="nav-link">
                  Hotel Details
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/bookings" className="nav-link">
                  Bookings
                </NavLink>
              </NavItem>
            </Nav>
        </div>
      </nav>
  )
};

export default Navbar;