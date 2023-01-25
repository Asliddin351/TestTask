import React from "react";
import styled from "styled-components";

const ButtonStyled = styled.button`
  width: calc(100% - 60px);
  height: 40px;
  cursor: pointer
`

const Button = ({children, ...props}) => {
    return (
        <ButtonStyled {...props}>{children}</ButtonStyled>
    )
}

export default Button;