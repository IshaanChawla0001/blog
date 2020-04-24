import React from 'react';
import News from './newsAPI';
import styled from 'styled-components';

function Nav(){
	return(
		<div>
		<Heading> News: </Heading>
		<News />
		</div>
		);
}

const Heading = styled.p`
	font-size: 1.5em;
	font-weight: bold;
	color: #4d4ae8;
	margin-left: 2%;
`;

export default Nav;
