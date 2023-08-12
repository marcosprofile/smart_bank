import React from 'react'
import styled from 'styled-components';
import Item from '../Item';
import ImageFilter from '../ImageFilter';

const Items = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: ${({ theme }) => theme.body};
  border-radius: 10px;
  margin: 2px 0;
  padding: 8px;
  font-size: 12px;
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  return (
    <Items>
      {ImageFilter(props.type)}
      <Item { ...props} />
      <span>{props.date}</span>
    </Items>
  );
};