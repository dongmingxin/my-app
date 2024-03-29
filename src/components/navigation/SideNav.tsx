import React, { useState } from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '../drawer/Drawer';
import Card from '../card/Card';
import NavLink from './NavLink';
import useCheckScrollDirection from '../../utils/useCheckScrollDirection';
import Image from 'next/image';

const TopBarContainer = styled.div`
	position: fixed;
	width: 100%;
	top: 0;
	right: 0;
	height: 50px;
	background-color: ${props => props.theme.cardBackgroundColor};
	box-shadow: ${props => props.theme.cardBoxShadow};
	transform: translateY(-100%);
	transition: 0.35s cubic-bezier(0.8, 1, 0.8, 1);
	z-index: 100;
	&.active {
		transform: translateY(0);
	}
`
const TopBarPlaceHolder = styled.div`
	height: 50px;
	width: 100%;
`

const MenuWrapper = styled.div`
	padding: 10px 10px 10px 10px;
	.menu {
		color: ${props => props.theme.textColorPrimary};
		font-size: 30px;
	}
`

const SideNavContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	.bg-wrapper {
		position: relative;
		width: 100%;
		height: 50vmin;
	}
	.card {
		width: 80%;
		display: grid;
		padding: 18px 15px;
		box-sizing: border-box;
		transform: translateY(-20%);
		background-color: ${props => props.theme.backgroundColor};
		color:${props => props.theme.textColorPrimary};
		grid-template-areas:
		'photo name'
		'photo slog';
		.photo-wrapper {
			grid-area: photo;
			width: 50%;
			position: relative;
		}
		.name{
			grid-area: name;
			font-size: 12px;
		}
		.slog {
			grid-area: slog;
			font-size: 12px;
		}
	}
	.linksWrapper {
		width: 80%;
		background-color: ${props => props.theme.backgroundColor};
		.navlink {
			width: 100%;
			text-align: center;
			padding: 20px 10px;
			color: ${props => props.theme.textColorPrimary};;
			font-weight: bold;
			opacity: 0.6;
			box-sizing: border-box;
		}
		.active {
      opacity: 1;
    }
	}
`

const SideNav = () => {
	const [isvisible, setIsVisible] = useState<boolean>(false);

  const handleClose = () => {
    setIsVisible(!isvisible)
  }

  return (
	<>
		<TopBarContainer className={useCheckScrollDirection()?'':'active'}>
					<MenuWrapper onClick={handleClose}>
						<MenuIcon className='menu'/>
					</MenuWrapper>
		</TopBarContainer>
		<TopBarPlaceHolder/>
		<Drawer
			visible={isvisible}
			onClose={handleClose}
		>
			<SideNavContainer>
				<div className='bg-wrapper'>
					<Image src="/sidenav-bg.jpeg" alt="side-bg" layout='fill'/>
				</div>
				<Card className='card'>
					<div className='photo-wrapper'>
						<Image src="/photo.png" alt="photo" layout='fill'/>
					</div>
					<div className='name'>
						Mingxin Dong
					</div>
					<div className='slog'>
						今天的努力只为未来
					</div>
				</Card>
				<Card className='linksWrapper'>
					<NavLink
						to="/"
						className="navlink"
						activeStyle='active'
					>
						Home
					</NavLink>
					<NavLink
							to="/resume"
							className="navlink"
							activeStyle='active'
					>
						Resume
					</NavLink>
					<NavLink 
						to="/blog"
						className="navlink"
						activeStyle='active'
					>
						Blog
					</NavLink>
				</Card>
			</SideNavContainer>
		</Drawer>
	</>
  )
}

export default SideNav