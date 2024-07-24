/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import {
	FaBars,
	FaTimes,
	FaHome,
	FaCreditCard,
	FaHouseUser,
	FaCar,
	FaShieldAlt,
	FaPersonBooth,
	FaBlog,
	FaInfoCircle,
	FaEnvelope,
} from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../../img/logo2.gif'; // Adjust the import path as necessary
import './header.css';

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => setIsOpen(!isOpen);
	const hide = () => setIsOpen(false);
	const show = () => setIsOpen(true);
	const location = useLocation();

	const navigation = [
		{ link: '/', text: 'Home', icon: <FaHome /> },
		{ link: '/cards', text: 'Cards', icon: <FaCreditCard /> },
		{ link: '/homeowners', text: 'Homeowner', icon: <FaHouseUser /> },
		{ link: '/auto', text: 'Auto', icon: <FaCar /> },
		{
			link: '/insurances-benefits',
			text: 'Insurances & Benefits',
			icon: <FaShieldAlt />,
		},

		{ link: '/blog', text: 'Blog', icon: <FaBlog /> },
		{ link: '/account', text: 'Account', icon: <FaPersonBooth /> },
		{ link: '/contact-us', text: 'Contact Us', icon: <FaEnvelope /> },
	];

	return (
		<nav className='nav bg-yellow-500 h-[55px]'>
			<div className='flex items-center sm: gap-[15rem]'>
				<img src={Logo} alt='Logo' className='logo-img w-30 h-30' />
				<button className='menu-toggle' onClick={toggle}>
					{isOpen ? (
						<FaTimes className='menu-icon' />
					) : (
						<FaBars className='menu-icon' />
					)}
				</button>
			</div>
			<ul className={`menu-links ${isOpen ? 'show' : ''}`}>
				{navigation.map((nav, index) => (
					<li
						key={index}
						className={`menu-item ${
							location.pathname === nav.link ? 'active' : ''
						}`}>
						<Link
							to={nav.link}
							onClick={toggle}
							onBlur={hide}
							onFocus={show}
							className='menu-link gap-2'>
							{nav.icon} {nav.text}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Header;
