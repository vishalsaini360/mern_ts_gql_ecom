import styled from "styled-components";

export const Wrapper = styled.div`
    padding: 3rem 3rem;
    color: #fff;
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
    background-color:#FEFEFE;
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
    margin-top: 10px;
`;
export const FormWrapper2 = styled(FormWrapper)`
    margin-top: 50px;
`;
export const FormWrapperArea = styled(FormWrapper)`
    width:100%;
`;
export const Input = styled.input`
    width:100%;
    height: 34px;
    display: block;
    padding: 6px 12px;
    text-decoration:none;
    margin-top:20px;
    margin-bottom:20px;
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
        border-color: #00234D;
        outline: 0;
        box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%), 0 0 8px rgb(102 175 233 / 60%);
    }
`;
export const TextArea = styled.textarea`
    width:100%;
    height: 150px;
    display: block;
    padding: 6px 12px;
    text-decoration:none;
    margin-top:20px;
    margin-bottom:20px;
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
        border-color: #00234D;
        outline: 0;
        box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%), 0 0 8px rgb(102 175 233 / 60%);
    }
`;
export const Select = styled.select`
    margin-left: 12px;
    width:97.4%;
    height: 34px;
    display: block;
    padding: 6px 12px;
    text-decoration:none;
    margin-top:20px;
    margin-bottom:20px;
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
        border-color:#00234D;
        outline: 0;
        box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%), 0 0 8px rgb(102 175 233 / 60%);
    }
`;
export const Option = styled.option`

`;
export const Button = styled.button`
    margin-top:20px;
    width:100%;
    color: #fff;
    background-color: #071C1F;
    border-color: #00234D;
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