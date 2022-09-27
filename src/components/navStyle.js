import styled from "styled-components"
import { NavLink } from "react-router-dom";

export const Container = styled.div`
display: flex;
border: 2px solid black;
`

export const Link = styled(NavLink)`
background-color: lightblue;
border: 1px solid black;
height: 100px;
`

