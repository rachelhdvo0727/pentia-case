import React, { useState, useRef } from "react";
import "./Navigation.css";

import { ReactComponent as Logo } from "../../assets/logo.svg";

function Navigation() {
	const bar1 = useRef(null);
	const bar2 = useRef(null);
	const bar3 = useRef(null);
	const [open, setOpen] = useState(false);
	const toggleOpenMenu = () => {
		setOpen(!open);
		animateBars();
	};
	const closeMenu = () => {
		setOpen(!open);
		animateBars();
	};
	const animateBars = () => {
		if (!open) {
			//transform burgermenu icon
			bar1.current.style.transform = "rotate(135deg) translate(-17px, -6px)";
			bar2.current.style.opacity = "0";
			bar2.current.style.left = "-60px";
			bar3.current.style.transform = "rotate(-135deg) translate(-13px, 20px)";
		} else {
			//remove transformation
			bar1.current.style.transform = "unset";
			bar2.current.style.opacity = "unset";
			bar2.current.style.left = "unset";
			bar3.current.style.transform = "unset";
		}
	};

	// Wrapper component for all items
	const MenuList = ({ children, open }) => {
		const content = open && <>{children}</>;
		return content;
	};

	return (
		<nav className='navigation'>
			<div className='svg-container'>
				<Logo className='app-logo' />
			</div>
			<button className='bars burger-menu' onClick={toggleOpenMenu}>
				<span ref={bar1} className='bar'></span>
				<span ref={bar2} className='bar'></span>
				<span ref={bar3} className='bar'></span>
			</button>
			<MenuList open={open}>
				<div className={"menu-list" + (open && " slide-right")}>
					<ul>
						<li>
							<a href='#section1' className='link' onClick={closeMenu}>
								Section 1
							</a>
						</li>
						<li>
							<a href='#section2' className='link' onClick={closeMenu}>
								Section 2
							</a>
						</li>
						<li>
							<a href='#section3' className='link' onClick={closeMenu}>
								Section 3
							</a>
						</li>
					</ul>
				</div>
			</MenuList>
		</nav>
	);
}

export default Navigation;
