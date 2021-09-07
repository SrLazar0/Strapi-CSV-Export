import React, {  useState } from 'react';
import styled from 'styled-components'
import { CSVLink } from 'react-csv/lib';
import { Button  } from '@buffetjs/core';
import {fetchEntries} from '../../utils/contentApi';

const ItemCard = ({children, ...props}) => {
  const [fetching, setFetching] = useState(false);
  const [content, setContent] = useState([]);

  const fetchModelData = (model) => {
    setFetching(true);
    fetchEntries(model.apiID, model.schema.kind).then((data) => {
      setContent(data);
    }).finally(() => {
      setFetching(false);
      console.log(content)
    });
  };



  return(
    <Container>
        <Content flex={1}>
        <Text>{props.name}</Text>
        </Content>
        <Content flex={1} justify={'flex-end'}>
        <CustomButton color="secondary" onClick={() => fetchModelData(props.model)}>Get Data</CustomButton>
        <CustomButton color="success" isDisabled={content.length>0? false:true}>
          <Link data={content} filename={props.name+'.csv'} >Download CSV</Link>
        </CustomButton>
        </Content>
    </Container>
  )
}

const Container = styled.div`
  background-color: #FFF;
  display: flex;
  justify-content: space-between;
  align-items:center;
  padding: 1rem;
  margin:2rem;
  border-radius: 0.2rem;
  -webkit-box-shadow: 0px 0px 6px 0px rgba(0,0,0,0.12); 
  box-shadow: 0px 0px 6px 0px rgba(0,0,0,0.12);
  &:first-of-type{
    margin-top:10rem;
  }
`

const Content = styled.div`
  display:flex;
  flex:${props=> props.flex};
  align-items: center;
  flex-wrap: wrap;
  justify-content: ${props=> props.justify}
`
const CustomButton = styled(Button)`
margin: 1rem;
${props => props.isDisabled?(
    'pointer-events:none; cursor: pointer; opacity: 0.5;'
   ):'' }
`

const Text = styled.h3`
  margin:0;
`

const Link = styled(CSVLink)`
  color:#FFF;
  justify-content:center;
  align-items:center;
  transition: all 400ms;
  &:hover  {
    text-decoration: none;
    color:#FFF;
  }
  ${props => props.isDisabled?(
    'pointer-events:none; cursor: pointer; opacity: 0.5;'
   ):'' }
`

export default ItemCard