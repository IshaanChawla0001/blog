import React from 'react';
import Header from './header.js';
import img1 from '../../assets/post2.png';
import styled from 'styled-components';
import Footer from '../../components/js/footer';
const  Post2 = props  => {

  return(
    <div className = "Post2">
    	<Header />
      <Title>Peter Anderson</Title>
    	<Img class="center"  src={img1} alt="img"/>
        <P>Boot camps have its supporters andit sdetractors. Some people do not understand why you should have to spend money on boot camp whenyou can get. Boot camps have itssuppor ters andits detractors.</P>
        <Footer />
    </div>
  );
}

const Img = styled.img`
 	width: 25%;
	height: 25%;
  justifyContent: "center";
    alignItems: "center";
`;


const Title = styled.p`
 	font-weight: bold;
  color: #4d4ae8;
 	 font-size: 30px;
 	 text-align: center;
`;

const P = styled.p`
 	font-weight: bold;
  color: #4d4ae8;
 	 font-size: 30px;
 	 text-align: center;
`;

export default Post2;
