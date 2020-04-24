import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";

const  Feeds = props  => {

  return(
         <div className = "feeds">
            <ul>
              <List className="image"><ImgCss src = {props.image} /></List>
              <List className="link"><Link to = {"/post"+props.id}  >{props.title}</Link></List>
              <List>Info: {props.summary} </List>
              <List className="date">Date: {props.date} </List>
              <Space></Space>
            </ul>
          </div>
  )

}

const List = styled.li`
list-style: none;
padding-right: 2px;
`;

const ImgCss = styled.img`
  width: 60%;
  height: 400px;
  margin-bottom: 5px;
`;

const Space = styled.div`
  padding-top: 35px;
`;

export default Feeds;
