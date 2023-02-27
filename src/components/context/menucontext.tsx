import React, { useState } from 'react';

interface IProps {
  children: JSX.Element;
}

export const MenuContext = React.createContext({});

export const MenuProvider: React.FC<IProps> = (props) => {
  const [activeMenu, setActiveMenu] = useState('');

  const value = {
    activeMenu,
    setActiveMenu,
  };

  return <MenuContext.Provider value={value}>{props.children}</MenuContext.Provider>;
};
