import React, { useState } from 'react'
import styled from 'styled-components'
import NightsStayIcon from '@mui/icons-material/NightsStay';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { useThemeContext } from '../../context/theme';

const OuterContainer = styled.div`
    position: fixed;
    right: 4vmin;
    bottom: 3vmin;
    width: 85px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    .innerContainer {
        background: #0008;
        width: 60px;
        height: 25px;
        border-bottom: 1px solid #fff8;
        border-top: 1px solid #000;
        border-radius: 4vmin;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 5px;
        @media screen and (max-width: 992px) {
            display: none;;
        }
        .dark {
            width: 20px;
            height: 20px;
            border-radius: 50%;
            cursor: pointer;
            .moon {
                font-size: 20px;
                color: #fffc;
            }
        }
        .light {
            width: 20px;
            height: 20px;
            border-radius: 50%;
            cursor: pointer;
            .sun {
                font-size: 20px;
                color: #ffbf00;
            }
        }
    }

`
const Cicle = styled.div`
    position: absolute;
    width: 35px;
    height: 35px;
    border: 3px solid;
    transition: all 0.5s cubic-bezier(0.7, -0.8, 0.2, 1.71) 0.1s;
    border-color: ${props => props.theme === 'dark' ? '#fffc' : '#ffbf00'};
    box-shadow:0 0 10px;
    color: ${props => props.theme === 'dark' ? '#fffc' : '#ffbf00'};
    border-radius: 50%;
    right: 1px;
    transform: ${props => props.theme === 'dark' ? 'translateX(-105%)' : 'translateX(0%)'};
    @media screen and (max-width: 992px) {
            display: none;;
    }
`

const DarkLightModeBtn = () => {
    const themeContext = useThemeContext();
    const theme = themeContext.theme;
    const setTheme = themeContext.changeTheme;
  return (
    <OuterContainer>
        <Cicle theme={theme}/>
        <div className='innerContainer'>
            <div className='dark' onClick={()=>{setTheme('dark')}}>
                <NightsStayIcon className='moon'/>
            </div>
            <div className='light' onClick={()=>{setTheme('light')}}>
                <WbSunnyIcon className='sun'/>
            </div>
        </div>
    </OuterContainer >
  )
}

export default DarkLightModeBtn