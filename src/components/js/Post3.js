import React from 'react';
import Header from './header.js';
import img1 from '../../assets/usa.jpg';
import styled from 'styled-components';
import Footer from '../../components/js/footer';
const  Post3 = props  => {

  return(
    <div className = "Post3">
    	<Header />
      <Title>Trump's immigration pause falls well short of full ban</Title>
    	<Img class="center"  src={img1} alt="img"/>
        <P> Trump announced that he will sign an executive order blocking most people for 60 days from receiving a permanent residency visa, or green card. But the order will still allow the government to continue processing visas for hundreds of thousands of temporary employees, including farm workers, landscapers and crab pickers — the largest source of immigration. </P>
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

export default Post3;
