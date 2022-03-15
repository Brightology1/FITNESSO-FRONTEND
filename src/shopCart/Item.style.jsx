import styled from 'styled-components'

export const Wrapper = styled.div`
 display: flex;
 justify-content: space-between;
 align-items: center;
 flex-direction: column;
 width: 100%;
 border-radius: 20px;
 height: 25rem;


 .prod_btn {
  border-radius: 5px;
  width: 80%;
  background-color: #ffbc42;
  position: absolute;
  bottom: 10px;
  left: 10%;
 }

 .prod_btn:hover{
    background-color: #ffa500;

 }

 .prod_desc, .prod_title, .prod_category, .prod_price{
     margin-bottom: 7px;
 }
 .prod_category, .prod_desc{
    text-transform: capitalize;
    font-weight: normal;
    font-size: 13px;
 }

 img {
    margin: 10px;
    height: 50%;
    width: 100%;
    object-fit: cover;
 }

 div {
    width: 100%;
    font-family: Arial, Helvetica, sans-serif;
    padding: 1rem;
    height: 100%;
    position: relative;
    font-size: 14px;
 }
`
