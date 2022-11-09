import React from 'react';
import styled from 'styled-components';
import { useEffect } from 'react';

const DrawerWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 78%;
  height: 100%;
  min-height: 100vh;
  background-color: ${props => props.theme.mobileNavBgColor};
  transform: translateX(-101%);
  z-index: 150;
  transition: transform 0.35s cubic-bezier(0.8, 1, 0.8, 1);
  &.active {
    transform: translateX(0%);
  }
`

const Shadow = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  background: rgba(0,0,0,.5);
  display: none;
  visibility: hidden;
  backdrop-filter: blur(5px);
  transition: visibility .35s,opacity .35s;
  opacity: 0;
  &.active {
    display: block;
    opacity: 1;
    visibility: visible;
  }
`

interface DrawerProps {
  children?: React.ReactNode;
  visible: boolean;
  onClose: ()=>void;
}

const Drawer = ({
  children,
  visible,
  onClose,
}:DrawerProps) => {

  useEffect(() => {
    document.body.style.overflow = `${visible?'hidden' : ''}`;
  }, [visible]);

  return (
    <>
      <DrawerWrapper className={`${visible ? 'active' : ''}`}>
        {children}
      </DrawerWrapper>
      <Shadow onClick={onClose} className={`${visible ? 'active' : ''}`}/>
    </>
  )
}

export default Drawer;