import React, {Component} from 'react';
import styled from 'styled-components';
import Feeds from './feed.js';
import img1 from '../../assets/post1.jpg';
import img2 from '../../assets/post2.png';
import img3 from '../../assets/usa.jpg';

class Main extends Component{
  render(){
  return(
    <Body>
      <Title>News Feed:</Title>
      <Feeds id="1"
           title = "A stormy evening"
      		 summary = "There is a moment in the life of any aspiring astronomer that it is time to buy that first telescope. It’s exciting to think about setting up your own viewing station."
           date = "20/01/2020"
       image = {img1} />

	 <Feeds id="2"
          title = "Peter Anderson"
      		 summary = "Boot camps have its supporters andit sdetractors. Some people do not understand why you should have to spend money on boot camp whenyou can get. Boot camps have itssuppor ters andits detractors."
           date = "21/01/2020"
       image = {img2} />

       <Feeds id="3"
              title = "Trump's immigration pause falls well short of full ban"
               summary = "Trump announced that he will sign an executive order blocking most people for 60 days from receiving a permanent residency visa, or green card. But the order will still allow the government to continue processing visas for hundreds of thousands of temporary employees, including farm workers, landscapers and crab pickers — the largest source of immigration."
               date = "21/01/2020"
           image = {img3} />

    </Body>
  );
}
}

const Title = styled.h2`
  color: #4d4ae8;
  margin-left: 4%;
`;

const Body = styled.main`
  margin-left: 1%;
  background: #ffffff;
  color: #4d4ae8;
  border-color: #4d4ae8;border: 2px solid #4d4ae8;
`;

export default Main;
