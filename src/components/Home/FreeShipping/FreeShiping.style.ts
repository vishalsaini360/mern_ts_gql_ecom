import styled from 'styled-components'

export const Wrapper = styled.div`
    display:flex;
    margin-top:100px;
    margin-bottom:100px;
    padding-left:80px;
    padding-right:70px
`;
export const Div1 = styled.div`
    flex:1;
    margin:10px 10px 10px 10px;
    border-radius:4px;
    padding: 40px 25px;
    background:#fcedda;
`;
export const Div2 = styled(Div1)`
    background:#f1f9cb;
`;
export const Div3 = styled(Div1)`
    background:#f7d8f9;
`;
export const Span = styled.span`
    font-size:16px;
    color:#00234D;
    line-height:1.5;
    margin-bottom:0;
    font-weight:500;
    margin-left:72px;
`;
export const Span2 = styled(Span)`
    margin-left:57px;
`;
export const Pragraph = styled.p`
    font-size:14px;
    color:#000;
    line-height:1.68;
    margin-bottom:0;
    font-weight:500;
    margin-left:73px;
    letter-spacing:0.5px;
    margin-top:7px;
`;
export const Pragraph2 = styled(Pragraph)`
    margin-left:60px;
`;
export const Img = styled.img`
    margin-top:13px;
    position:absolute;
`;