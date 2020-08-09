import styled from 'styled-components';

export const VideoCardContainer = styled.a`
  display: flex;
  flex: 0 0 298px;
  position: relative;
  padding: 16px;
  color: white;
  
  width: 298px;
  height: 168px;

  border: 2px solid;
  border-radius: 4px;

  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  align-items: flex-end;

  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  
  transition: transform .3s;
  &:hover {
    transform: scale(1.2);
    z-index: 1;
  }
  
  &:not(:first-child) {
    margin-left: 20px;
  }
`;
