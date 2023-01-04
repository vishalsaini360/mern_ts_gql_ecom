import styled from "styled-components";
import {NavLink as Link} from 'react-router-dom';

export const Wrapper = styled.div`
    background-color: #071C1F;
    padding-top: 0.5rem!important;
    padding-bottom: 0.5rem!important;
    color: #fff;
`;

export const Container = styled.div`
    max-width: 1140px;
    width: 100%;
    padding-right: var(--bs-gutter-x,.75rem);
    padding-left: var(--bs-gutter-x,.75rem);
    margin-right: auto;
    margin-left: auto;
`;

export const Row = styled.div`
    align-items: center!important;
    justify-content: space-between!important;
    --bs-gutter-x: 1.5rem;
    --bs-gutter-y: 0;
    display: flex;
    flex-wrap: wrap;
`;

export const Col3 = styled.div`
    display: block!important;
    flex: 0 0 auto;
    width: 25%;
`;

export const Col6 = styled(Col3)`
    width: 50%;
`;

export const AnnouncementWrapper = styled.div`
    justify-content: center!important;
    align-items: center!important;
    display: flex!important;
`;

export const AnnouncementText = styled.a`
    margin: 0;
    text-decoration: none;
    font-size: 14px;
    line-height: 27px;
    font-weight: var(--body-font-weight);
    color: #fff !important;
`;

export const Text = styled.span`
`;
export const TextBlack = styled.span`
    color: black !important;
`;

export const Seperator = styled.div`
    padding-right: 1rem!important;
    padding-left: 1rem!important;
    display: flex!important;
    border-right : 1px solid #fff;
    height: 25px; 
`;

export const CurrencyWrapper = styled.div`
    padding-right: 1rem!important;
    padding-left: 1rem!important;
    display: flex!important;
    :hover div{
        display:block;
    }
`;

export const FlagImg = styled.img`
    min-width: 20px;
    max-width: 20px;
    margin-right: 3px;
    vertical-align: middle;
`;

export const Button = styled(AnnouncementText)`
    cursor: pointer;
    background: transparent;
    padding: 0;
    border: none !important;
    outline: none !important;
    box-shadow: none !important;
`;

export const FontIcon = styled.i`
    margin-right:10px;
    margin-left:10px;
`;
export const CurrencyDropdown = styled.div`
    display:none;
    position:absolute;
    min-width: 85px;
    background-color:#f9f9f9;
    color:black !important;
    box:shadow:0px 8px 16px 0px rgba(0,0,0,0.2);
    padding:12px 16px;
    z-index:1; 
    margin-top: 22px;
    margin-left: -13px;
`;

export const NavLink = styled(Link)`
    color: #fff;
    text-decoration:none;
    :active{
        color:green;
    }
`;