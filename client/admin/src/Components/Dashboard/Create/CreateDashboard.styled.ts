import styled from "styled-components";

export const Wrapper = styled.div`
    width:77%;
    margin-top:50px;
    margin-bottom:50px;
    margin-right:15px;
    margin-left: 269px;
    padding-left: 56px;
`;
export const Column = styled.div`
    float: left;
    width: 25%;
    padding: 0 10px;
`;
export const Row = styled.div`
    height: 152px;
    margin: 0 -5px;
    border: 1px solid #555;
    border-radius: 8px;
    padding: 13px 23px;
    cursor:pointer;
    transition: 2s ease;
    :hover{
        color:#fff !important;
        background: #071C1F;
    }
    :after {
        content: "";
        display: table;
        clear: both;
      }
`; 
export const H1 = styled.h1`
      font-weight:400;
      margin-top: 10px;
`;
export const P = styled.p`
      font-weight:400;
      font-size: 39px;
      font-weight: 400;
      margin-top: 10px;
`;
export const P2 = styled.p`
      font-weight:400;
      margin-top: 5px;
      position: relative;
      top: -47px;
`;
export const Font = styled.i`
    margin-left: 134px;
    font-size: 54px;
    position: relative;
    top: -63px;
`;
export const Img = styled.img`
      width:100%;
`;