import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components'

export const TopBar = styled.div`
    width: 77%;
    height: 63px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 3rem;
    color: White;
    margin-left: 298px;
    padding-left: 56px;
`;
export const Toggle = styled.div`
    position: relative;
    width: 6rem;
    height: 6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2.5rem;
    cursor: pointer;
`;
export const HeaderLink = styled.p`
    font-size:1.5rem;
    color:#000;
    text-decoration:none;
    position: relative;
    display: inline-block;
    :hover div{
        display: block;
    }
`;
export const DropdownContent = styled.div`
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 108px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
    margin-left: -35px;
`;
export const TopBar1 = styled(TopBar)`
    --bs-bg-opacity: 1;
    background-color:rgb(168 170 171) !important;
`;
export const H1 = styled.h1`
    font-size:3rem;
    color:#ffffff;
`;
export const LoginP = styled.p`
    padding:10px 10px;
    :hover a{
        color:#fff;
    }
    :hover{
        background-color:#555;
    }
`;
export const LoginLink = styled(NavLink)`
    color:#222;
    text-decoration:none;
`;