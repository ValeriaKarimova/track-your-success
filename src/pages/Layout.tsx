import React from 'react'
import { Outlet } from "react-router-dom";
import { AddBtn } from '../components/AddBtn/AddBtn';


export function Layout() {
    return <>
    <Outlet />
    </>
}