import  { React } from 'react';
import { ResponsiveButton } from './Button';
import { ResponsiveFooter } from './Footer';
import { ResponsiveNavbar } from './Navbar';
import { main } from './Main';
import { header } from './Header';
import { headerCss } from './header-css';
import { ReactDOM } from 'react-dom';


/*
 *   Creating the root element
 */

const root = ReactDOM.createRoot(document.getElementById('root'));


/*
 *   Rendering elements
 */

root.render(
	<>
	 <ResponsiveNavbar />
	 <ResponsiveButton />
	 <ResponsiveFooter />
	 <Main />
	 <Header />
	</>
);