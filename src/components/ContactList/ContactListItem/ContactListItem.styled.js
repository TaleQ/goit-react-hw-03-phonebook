import styled from "styled-components";
import { Button } from "components/Common.styled";

export const ContactItem = styled.li`
display: flex;
gap: 15px;
justify-content: center;
font-size: 22px;
/* &::before{
  content: "";
  width: 20px;
  height: 20px;
  background-color: blue;
  background-image: url(src/img/contact_icon.png);
  background-position: cover;
  background-repeat: no-repeat;
  background-size: 20px 20px;
} */
`

export const DeleteButton = styled(Button)`
width: 65px;
background-color: #ffffff;
border: 1px solid #2160c4;
color: #2160c4;
font-size: 16px;
&:active {
  background-color: #2160c4;
color: #ffffff;
}
`