import React, { Component } from "react";
import styled from 'styled-components';
class Footer extends Component {
    render() {
        return (
                 <Fr>
                    <Text>Copyrights by Ishaan Chawla </Text>
                </Fr>
        );
    }
}

const Text = styled.p`
 padding-left: 2px;
 border-top: 1px soild white;
 color: #4d4ae8;
 text-align: center;
`;

const Fr = styled.footer`
background-color: #FFFFFF;
padding: 13.5px;
text-align: center;
font-weight: bold;
color: #4d4ae8;
margin: 1%;
border-color: #4d4ae8;border: 2px solid #4d4ae8;
`;

export default Footer;
