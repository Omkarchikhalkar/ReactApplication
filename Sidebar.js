import React, { useState } from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { IconContext } from 'react-icons/lib';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';

// const Nav = styled.div`
//   background:  #red;
// //   height: 80px;
//   display: flex;
//   justify-content: flex-start;
//   align-items: left;
// `;

// const NavIcon = styled(Link)`
//   margin-left: 2rem;
//   font-size: 2rem;
// //   height: 80px;
//   display: flex;
//   justify-content: flex-start;
//   align-items: center;
//   background: red;
// `;

const SidebarNav = styled.nav`
  background: #15171c;
  width: 180px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
  overflow-y: scroll;
`;

const SidebarWrap = styled.div`
  width: 100%;
  
`;

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(true);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      {/* <IconContext.Provider value={{ color: '#fff' }}> */}
        {/* <Nav>
          <NavIcon to='#'>
            <FaIcons.FaBars onClick={showSidebar} />
          </NavIcon>
        </Nav> */}
        <SidebarNav sidebar={"true"} >
          <SidebarWrap>
            {/* <NavIcon to='#'>
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </NavIcon> */}
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
      {/* </IconContext.Provider> */}
    </>
  );
};

export default Sidebar;
