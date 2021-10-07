import React from 'react';
import {Link} from 'react-router-dom';
import {useGlobalContext} from '../contexts/Context';
import styled from 'styled-components';
import {Loader} from '../components';

const Hero = () => {
  const {loading, list} = useGlobalContext();

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      {list &&
        list.map((item) => {
          const {id, color, url} = item;
          return (
            <Link key={id} className="product" to={`/${id}`}>
              <Img src={url} alt={color} />
            </Link>
          );
        })}
    </div>
  );
};

const Img = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 10px;
  margin: 10px;
  transition: all 300ms ease-in-out;
  &:hover {
    opacity: 0.5;
    transform: scale(0.978);
  }
`;

export default Hero;
