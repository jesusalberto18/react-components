import React from 'react';
import Footer from './Footer';
import ProjectCard, UserCard, TaskCard from './Card';
import NavBar from './Navbar';
import { Button } from './Button';

/*
 *   Creating the root element
 */

const root = ReactDOM.createRoot(document.getElementById('root'));


/*
 *   Rendering elements
 */

root.render(
	<>
		<Footer />
		<NavBAr />
		<ProjectCard />
		<UserCard />
		<Button />
		<TaskCard />
	<>
);