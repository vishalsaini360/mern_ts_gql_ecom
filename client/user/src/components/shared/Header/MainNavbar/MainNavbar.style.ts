import styled from "styled-components";

export const Wrapper = styled.div`
    position: sticky;
    top: 0;
    z-index: 99;
    background-color: #fff;
    width: 100%;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

export const HeaderBottom = styled.div`
    position: relative;
`;

export const Container = styled.div`
    padding-top: 0.5rem!important;
    padding-bottom: 0.5rem!important;
    max-width: 1140px;
    width: 100%;
    padding-right: var(--bs-gutter-x,.75rem);
    padding-left: var(--bs-gutter-x,.75rem);
    margin-right: auto;
    margin-left: auto;
`;

export const Row = styled.div`
    align-items: center!important;
    --bs-gutter-x: 1.5rem;
    --bs-gutter-y: 0;
    display: flex;
    flex-wrap: wrap;
    margin-top: calc(var(--bs-gutter-y) * -1);
    margin-right: calc(var(--bs-gutter-x) * -.5);
    margin-left: calc(var(--bs-gutter-x) * -.5);
`;

export const Col3 = styled.div`
    display: block!important;
    flex: 0 0 auto;
    width: 25%;
`;

export const Col6 = styled(Col3)`
    width: 50%;
`;

export const Logo = styled.a`
    display: flex;
    text-decoration: none;
    border: none;
    outline: none;
    -ms-transition: all 0.3s;
    -webkit-transition: all 0.3s;
    -o-transition: all 0.3s;
    transition: all 0.3s;
`;

export const LogoImg = styled.img`
    max-width: 100%;
`;

export const Ul = styled.ul`
    margin-left: -20px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-left: -20px;
    margin-bottom: 0;
    justify-content: center!important;
    padding-left: 0;
    list-style: none;
`;

export const Li = styled.li`
    padding: 28px 20px;
    cursor: pointer;
    position: relative;
`;

export const MegaMenuHeader = styled.div`
    -ms-display: flex;
    -webkit-display: flex;
    display: -webkit-box;
    display: flex;
    -ms-align-items: center;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    :hover{
        color: #f76b6a;
    }
`;

export const MegaMenuText = styled.a`
    color: #000;
    padding: 0;
    font-weight: 500;
    font-size: 15px;
    display: block;
    padding: 0.5rem 1rem;
    text-decoration: none;
        transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out;
    };
    :hover{
        color: #f76b6a;
    }
    :hover div{
       display:block;
    }
`;

export const MegaMenuSpan = styled.span`
    padding-left: 5px;
`;
export const Dropdown = styled.div`
    margin-top: 2px;
    display: none;
    cursor: pointer;
    position: absolute;
    box-shadow: 0px 8px 16px 0pxrgba(0,0,0,0.2);
    padding: 37px 37px 0px 0px;
    color: #555;
    font-weight: 400;
    z-index: 99;
    background: #fff;
    width:100%;
`;
export const DropdownUl = styled.ul`
    list-style:none;
`;
export const DropdownLi = styled.li`
    color:#555;
    padding: 4px 0px 10px 6px;
    width:100%;
    :hover{
        color:#f76b6a;
    }
`;
export const Dropdown2 = styled(Dropdown)`
    left: -451px;
    width: 1250px;margin:0;

`;
export const DropdownDiv = styled.div`
   display:flex !important;
   width:100%;
`;
export const DropdownUl2 = styled.ul`
    flex: 1 !important;
    background: #fff;
    padding: 16px 25px;
    list-style: none;
`;
export const DropdownLi2 = styled(DropdownLi)`
    
`;