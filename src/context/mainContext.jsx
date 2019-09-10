import React, { useState } from 'react';
import '@babel/polyfill';
import axios from 'axios';

const Context = React.createContext({});

export const MainStore = (props) => {
  const [greeting, setGreeting] = useState('Hello World');


  return (
    <Context.Provider value={{
      greeting,
    }}
    >
    {props.children}
  </Context.Provider>
  );
};

export default Context;
