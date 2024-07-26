import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SidebarLink = styled(Link)`
  display: flex;
  color: #e1e9fc;
  justify-content: space-between;
  align-items: left;
  
  padding: 20px 2px 20px 5px;
  list-style: none;
  height: 20px;
  text-decoration: none;
  font-size: 15px;
  text-align:left;
  

  &:hover {
    background: #252831;
    border-left: 4px solid white;
    cursor: pointer;
  }
`;

const SidebarLabel = styled.span`
  margin-left: 5px;
`;

const DropdownLink = styled(Link)`
  background: #414757;
  height: 12px;
  padding: 20px 2px 20px 20px;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #f5f5f5;
  font-size: 13px;
  text-align:left;

  &:hover {
    background: gray;
    cursor: pointer;
  }
`;

const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
        <div>
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </SidebarLink>
      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <DropdownLink to={item.path} key={index}>
              <SidebarLabel>{item.title}</SidebarLabel>
            </DropdownLink>
          );
        })}
    </>
  );
};

export default SubMenu;
