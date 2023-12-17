import styled from "styled-components";
import { Row } from "antd";
import { Link } from "react-router-dom";

export const WrapperHeader = styled(Row)`
  padding: 10px 120px;
  background-color: #696969
  
`
export const WrapperTextHeader = styled(Link)`
    font-family: 'slick';
    font-style: oblique;
    font-size: 30px;
     color: #fff;
    font-weight: bold;
    text-align: left;
    &:hover {
        font-size: 30px;
        color: #fff;
    }
`

export const WrapperHeaderAccount = styled.div`
display:flex;
align-items:center;
color: #fff
gap:8px;
`
export const WrapperHeaderSmall = styled.span`
font-size: 13px;
color: #fff
`
export const WrapperContentPopup = styled.p`
    cursor: pointer;
    &:hover {
        color: rgb(26, 148, 255);
    }
`