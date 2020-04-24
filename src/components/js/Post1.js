import React from 'react';
import Header from './header.js';
import img1 from '../../assets/post1.jpg';
import styled from 'styled-components';
import Footer from '../../components/js/footer';
const  Post1 = props  => {

  return(
    <div className = "Post1">
    	<Header />
    	<Title> A stormy evening</Title>
    	<Img class="center"  src={img1} alt="img"/>
        <P> There is a moment in the life of any aspiring astronomer that it is time to buy that first telescope. It’s exciting to think about setting up your own viewing station. </P>
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

export default Post1;
