import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';


const NavLinkWrapper = styled.div`

`;

interface NavLinkProps {
  className?:string;
  to:string;
	activeStyle?:string;
  children?:React.ReactNode;
}

const NavLink = ({
	className,
	to,
	children,
	activeStyle,
}:NavLinkProps) => {

	const router = useRouter()

	const handleNavigate = (path:string):void => {
		router.push(path)
	}

	const isLinkActive = ():boolean => {
		if(router.pathname===to) {
			return true
		}
		return false
	}

	return (
		<NavLinkWrapper
		className={isLinkActive() ? `${className} ${activeStyle}` : className}
		onClick={()=>handleNavigate(to)}
	>
		{children}
	</NavLinkWrapper>
  )
}

export default NavLink