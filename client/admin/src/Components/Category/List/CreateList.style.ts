import styled from 'styled-components'

export const Wrapper = styled.div`
    color: White;
    margin-left: 298px;
    padding-left: 56px;
    margin-top:5vh;
    margin-bottom: 8rem;
`;
export const Table = styled.table`
    width: 94%;
    color: #000;
    border: 1px solid #555;
    border-radius: 8px;
    display: block;
    box-shadow: inset 0 1px 1px #555, 0 0 8px #555;
    font-size: 18px;
    margin-left: 14px;
`;
export const Thead = styled.thead`
    width:100%;
`;
export const Tr = styled.tr`
    display:flex;
    width:100%;
    transition: 1.5s ease-in-out;
    :hover{
        background:#071C1F;
        color:#ffffff;
    }
`;
export const Th = styled.th`
    flex:1;
    padding:10px 5px;
`;
export const Td = styled.td`
    flex:1;
    margin-left:20px;
    padding:10px 40px;
`;
export const Td1 = styled(Td)`
    left: 41px;
    position: relative;
`;
export const Img = styled.img`
    border-radius: 47px;
    width: 80px;
    height: 80px;
    border: 2px solid #5a5959;
`;
export const Button = styled.button`
    width:40%;
    color: #fff;
    background-color: red;
    border-color: red;
    display: inline-block;
    margin-bottom: 0;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    touch-action: manipulation;
    cursor: pointer;
    background-image: none;
    border: 1px solid transparent;
    font-size: 14px;
    line-height: 1.42857143;
    border-radius: 4px;
    user-select: none;
    margin-left:5px;
`;