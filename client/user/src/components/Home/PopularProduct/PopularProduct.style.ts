import styled from 'styled-components'

export const Wrapper = styled.div`
    // padding-left:70px;
    // padding-right:90px;
    // margin-top:100px;
    margin: 50px 18px 11px 19px;
`;
export const H1 = styled.h1`
    text-align:center !important;
    color:#000;
    font-family:'Poppins',sans-serif;
    font-size:48px;
    font-weight:600;
    margin-bottom:0;
    line-height:1.5;
`;
export const Card = styled.div`
    // display:flex;
    margin: 0 -5px;
    :after {
        content: "";
        display: table;
        clear: both;
      }
`;
export const Container = styled.div`
    // margin:auto;
    // font-family:arial;
    // display:inline;
    // width:100%;
    // margin-top:50px;
    // margin-left:40px;
    float: left;
    width: 23%;
    padding: 0 10px;
`;
export const Img = styled.img`
    // width:250px;
    width: 100%;
   height: 230px;
`;
export const Paragraph = styled.p`
    font-size:14px;
    margin-left:10px;
`; 
export const ColorBg = styled.span`
    height:40px;
    border-radius:26px;
    padding-left:10px;
    margin-left:10px;
    content:"";
    background:#000;
    color:#000;
`;
export const ColorBg2 = styled(ColorBg)`
    background:#ABE6FF;
    color:#ABE6FF;
`;
export const ColorBg3 = styled(ColorBg)`
    background:#FFE0E0;
    color:#FFE0E0;
`;
export const ButtonWrapper = styled.div`
    margin-top:50px;
    margin-bottom:100px;
    text-align:center;
`;
export const Button = styled.button`
    margin-top:50px;
    color:#fff;
    background:#F76B6A;
    font-size:14px;
    line-height:1;
    text-decoration:none;
    padding:13px 15px;
    border:1px solid #F76B6A;
    border-radius:4px;
`; 
export const CardWrapper = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    max-width: 300px;
    margin: 35px 0px 84px 24px;
    text-align: center;
    font-family: arial;
`;