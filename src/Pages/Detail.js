import React, {useEffect} from 'react';
import {useGlobalContext} from '../contexts/Context';
import styled from 'styled-components';
import {Link, useParams} from 'react-router-dom';
import Loader from '../components/Loader';

const Detail = () => {
  const {loading, singleList, singleData} = useGlobalContext();
  const {color, type, url, seasons} = singleList;
  const {id} = useParams('');

  useEffect(() => {
    singleData(id);
  }, [id]);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Alink to="/">back to home</Alink>
      <Article className="product">
        <Img className="product-img" src={url} alt={color} />
        <Div className="product-info">
          <h3 className="title">{color}</h3>
          <h5 className="price">{type}</h5>
          <p className="desc">{seasons}</p>
        </Div>
      </Article>
    </>
  );
};

const Article = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;
`;
const Img = styled.img`
  width: 600px;
  height: 600px;
  border-radius: 10px;
  margin: 10px;
  transition: all 300ms ease-in-out;
`;
const Div = styled.div`
  margin: 0 30px;
`;

const Alink = styled(Link)`
  margin: 20px;
  background-color: teal;
  border-radius: 10px;
  padding: 10px;
  color: white;
`;

export default Detail;
