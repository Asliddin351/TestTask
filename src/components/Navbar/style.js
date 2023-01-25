import styled from "styled-components";

const NavbarContainer = styled.div`
    background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4gPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJncmFkIiBncmFkaWVudFVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgeDE9IjAuNSIgeTE9IjAuMCIgeDI9IjAuNSIgeTI9IjEuMCI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzRiNGI0YiIvPjxzdG9wIG9mZnNldD0iODAlIiBzdG9wLWNvbG9yPSIjMWMxYzFjIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMmEyYTJhIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmFkKSIgLz48L3N2Zz4g);
    height: 50px;
`

const NavbarRow = styled.div`
    max-width: 970px;
    height: 100%;
    margin-inline: auto;
    display: flex; 
    align-items: center;
`



const NavbarLogo = styled.a`
    width: 130px;
    height: 40px;
    filter: alpha(opacity=80);
    opacity: .8;
`

const Dropdown = styled.select`
    background-color: #2d2d2d;
    border: 1px solid #212121;
    color: rgba(255,255,255,0.9);   
    padding: 3px 15px 0 5px;
    box-shadow: #2d2d2d 0 0 2px;
    font-size: 11px;
    border-radius: 5px;
    cursor:pointer;
    margin-left: 40px;
    &:focus {
        outline: none;
    }
`

const Button = styled.button`
    background-color: #2d2d2d;
    border: 1px solid #212121;
    color: rgba(255,255,255,0.9);
    padding: 3px 5px;
    box-shadow: #2d2d2d 0 0 2px;
    font-size: 11px;
    border-radius: 5px;
    cursor:pointer; 
    margin-left: 90px;
    font-family: Arial, sans-serif;
    &:focus {
        outline: none;
    };
`


const NavButton = styled.a`
    position: relative;
    display: inline-block;
    background: linear-gradient(#406db8,#1a2d54);
    display: block;
    padding: 3px 10px 4px;
    border-radius: 5px;
    filter: alpha(opacity=99);
    opacity: .99;
    border-top: 1px solid rgba(255,255,255,0.5);
    color: white;
    padding-left: 40px;
    padding-right: 10px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 12px;
    font-weight: bold;
    line-height: 18px;
    white-space: nowrap;
    text-decoration: none;
    box-shadow: black 0 -1px 2px, rgb(255 255 255 / 10%) 0 1px 1px;
    &:active {
        background: linear-gradient(#1a2c4e,#203862)
    }
`

const NavButtonWrapper = styled.div`
    width: 100%;
    &:before {
        content: '';
        background-image: url(https://st.prntscr.com/2022/09/11/1722/img/button-download.png);
        background-repeat: no-repeat;
        background-position: center;
        z-index: 5;
        width: 34px;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
    };
    &:after {
        content: '';
        z-index: 5;
        width: 2px;
        position: absolute;
        left: 32px;
        top: 0;
        bottom: 1px;
        filter: alpha(opacity=40);
        opacity: .4;
        display: block;
        top: -1px;
        bottom: 0;
        background: rgba(0,0,0,0.6);
    }
`



export { Button, NavbarContainer, NavbarRow, NavbarLogo, Dropdown, NavButton, NavButtonWrapper }