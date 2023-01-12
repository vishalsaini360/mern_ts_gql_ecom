import styled from 'styled-components'

export const Wrapper = styled.div`
    padding: 3rem 3rem;
    color: White;
    margin-left: 298px;
    padding-left: 56px;
    margin-top:20px;
`;
export const H2 = styled.h2`
    text-align:center;
    font-size:48px;
    font-weight:400;
    color:#000;
    padding-bottom:20px;
    border-bottom:1px solid #555;
`
export const Form = styled.form`
    border:1px solid #555;
    border-radius:8px;
    padding:50px 50px;
    margin-left:15px;
    margin-right:15px;
    box-shadow: inset 0 1px 1px #555, 0 0 8px #555;
`;
export const Label = styled.label`
    color:#000;
    margin-bottom:20px;
    font-size:18px;
    font-weight:400;
`;
export const FormWrapper = styled.div`
    width:50%;
    float: left;
    padding:10px 10px;
    display: block;
    margin-top: 50px;
`;
export const Input = styled.input`
    width:100%;
    height: 34px;
    display: block;
    padding: 6px 12px;
    text-decoration:none;
    margin-top:20px;
    font-size: 14px;
    line-height: 1.42857143;
    color: #555;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%);
    transition: border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;
    transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
    transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;
    :focus{
        border-color: #66afe9;
        outline: 0;
        box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%), 0 0 8px rgb(102 175 233 / 60%);
    }
`;
export const Button = styled.button`
    margin-top:20px;
    width:100%;
    color: #fff;
    background-color: #071C1F
    ;
    border-color: #2e6da4;
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
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42857143;
    border-radius: 4px;
    user-select: none;
`;
export const P = styled.span`
    color:red;
    font-size:14px;
    padding:10px 10px;
`;