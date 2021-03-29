import React, {useState} from "react";
import './navigation.css';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
const Navigation = () => {
	const [headerStyle, setHeaderStyle] = useState({
  	transition: 'all 300ms ease-in'
	})

	useScrollPosition(
  ({ prevPos, currPos }) => {
    const isVisible = currPos.y > prevPos.y

    const shouldBeStyle = {
      visibility: isVisible ? 'visible' : 'hidden',
      transition: `all 300ms ${isVisible ? 'ease-in' : 'ease-out'}`,
      transform: isVisible ? 'none' : 'translate(0, -100%)'
    }

    if (JSON.stringify(shouldBeStyle) === JSON.stringify(headerStyle)) return

    setHeaderStyle(shouldBeStyle)
  },
  [headerStyle]
)
  return (
  <nav  >
    <ul className="menu" style={{ ...headerStyle }}>
    	<li className="logo" style={{"float":"left"}}><a href="#about">Personal Portfolio of Aiaru</a></li>
    	<li className="item"><a href="#about">About</a><div className="underline"></div></li>
        <li className="item"><a href="#projects">Projects</a><div className="underline"></div></li>
        <li className="item"><a href="#contactme">Contact</a><div className="underline"></div></li>
    </ul>
</nav>
  	);
}

export default Navigation;