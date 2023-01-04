import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Navigation = styled.div`
    position: fixed;
    width: 30rem;
    height: 100%;
    background: #071C1F;;
    border-left: 10px solid #071C1F;;
    transition: 0.5s;
    overflow: hidden;
`;
export const Ul = styled.ul`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
`;
export const Li = styled.li`
    position: relative;
    width: 100%;
    list-style: none;
    border-top-left-radius: 3rem;
    border-bottom-left-radius: 3rem;
    .hover{
        background-color: var(--white);
    }
    .hovered {
        background-color: var(--white);
    }  
    :nth-child(1) {
        margin-bottom: 4rem;
        pointer-events: none;
    }   
    :hover a::before {
        content: "";
        position: absolute;
        right: 0;
        top: -5rem;
        width: 5rem;
        height: 5rem;
        background-color: transparent;
        border-radius: 50%;
        box-shadow: 35px 35px 0 1rem var(--white);
        pointer-events: none;
    } 
    :hover a::after {
        content: "";
        position: absolute;
        right: 0;
        bottom: -5rem;
        width: 5rem;
        height: 5rem;
        background-color: transparent;
        border-radius: 50%;
        box-shadow: 35px -35px 0 1rem var(--white);
        pointer-events: none;
    }
    :hover a{
        width: 100%;
        margin-left:10px;
        background-color: #fff;
        border-radius: 88px;
    }
`;
export const H1 = styled.h1`
    font-size: 7rem;
    margin-top: 20px;
`;
export const Anchor = styled(Link)`
    position: relative;
    display: block;
    width: 100%;
    display: flex;
    text-decoration: none;
    color: #fff;
    :hover{ color:#071C1F; }
`;
export const Icon = styled.span`
    position: relative;
    display: block;
    min-width: 6rem;
    height: 6rem;
    line-height: 7.5rem;
    text-align: center;
    ion-icon{
        font-size: 1.75rem;
    }
`;
export const LogoDiv = styled.div`
    width: 50% !important;
    margin-left: 3rem;
`;
export const LogoImg = styled.img`
    width: 100% !important;
`;
export const Title = styled.span`
    position: relative;
    display: block;
    padding: 0 1rem;
    height: 6rem;
    line-height: 6rem;
    text-align: start;
    white-space: nowrap;
    font-size: 1.7rem;
    font-weight: 300;
`;