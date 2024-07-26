import React from 'react';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  {
    title: "React JS",
    path: "/",
    cName: "head"
  },
  {
    title: "Functional Component",
    path: "/fn",
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Functional Component - 1",
        path: "/fn/fn1",
        cName: "sub-nav",
      },
      {
        title: "Functional Component - 2",
        path: "/fn/fn2",
        cName: "sub-nav",
      },
    ],
  },
  {
    title: "Class Component",
    path: "/Class-Component",
  },
  {
    title: "Props & Stats",
    path: "/Props",
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Props",
        path: "/Props/props",
        cName: "sub-nav",
      },
      {
        title: "Props in Multilevel Class",
        path: "/Props/props-in-multilevelclass",
        cName: "sub-nav",
      },
      {
        title: "State",
        path: "/State/state",
      },
      {
        title: "State with Counter",
        path: "/State/state&counter",
      },
      {
        title: "Flow of State and Props",
        path: "/State/Flow of State and Props",
      },
    ],
  },
  {
    title: "Component Life Cycle",
    path: "/Component-LifeCycle",
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Constructor",
        path: "/Component-LifeCycle/Constructor",
      },
      {
        title: "Life Cycle Phases",
        path: "/Component-LifeCycle/Life-Cycle-Phases",
      },
    ],
  },
  {
    title: "Hooks - useState",
    path: "/Hooks-useState",
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "useState",
        path: "/Hooks-useState/useState",
      },
      {
        title: "Multiple useState",
        path: "/Hooks-useState/multiuseEffect",
      },
      {
        title: "Login Form with useState",
        path: "/Hooks-useState/Login-form-useState",
      },
    ],
  },
  {
    title: "Hooks - useEffect",
    path: "/Hooks-useEffect",
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "useEffect",
        path: "/Hooks-useEffect/useEffect",
      },
      {
        title: "useEffect with API",
        path: "/Hooks-useEffect/useEffectInAPI",
      },
    ],
  },
  {
    title: "Hooks - useContext",
    path: "/Hooks-useContext",
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "useContext",
        path: "/Hooks-useContext/useContext",
      },
      {
        title: "useContext with State update",
        path: "/Hooks-useContext/updtae-state-with-useContext",
      }
    ],
  },
  {
    title: "Hooks - useRef",
    path: "/Hooks-useRef",
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "useRef",
        path: "/Hooks-useRef/useRef",
      }
    ],
  },
  {
    title: "Hooks - useReducer",
    path: "/Hooks-useReducer",
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "useReducer",
        path: "/Hooks-useReducer/useReducer",
      }
    ],
  },
  {
    title: "Custom Hooks",
    path: "/customHooks",
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Custom Hooks",
        path: "/customHooks/customHooks",
      },
      {
        title: "NPM Custom Hooks",
        path: "/customhooks/NPM-custom-hook",
      },
    ],
  },
];
