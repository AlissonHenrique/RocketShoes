import styled from 'styled-components';
import { darken } from 'polished';

export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
  list-style: none;

  li {
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 0.4rem;
    padding: 2rem;

    img {
      align-items: center;
      max-width: 25rem;
    }

    > strong {
      font-size: 2.1rem;
      font-weight: bold;
      margin: 0.5rem 0 2rem;
    }
    > span {
      font-size: 2.1rem;
      font-weight: bold;
      margin: 0.5rem 0 2rem;
    }
    button {
      background: #7159c1;
      color: #fff;
      border: 0;
      border-radius: 0.4rem;
      overflow: hidden;
      margin-top: auto;
      display: flex;
      align-items: center;
      background: transition 0.2s;
      &:hover {
        background: ${darken(0.03, '#7159c1')};
      }

      div {
        display: flex;
        align-items: center;
        padding: 1.2rem;
        background: rgba(0, 0, 0, 0.1);
        svg {
          margin-right: 0.5rem;
        }
      }
      span {
        flex: 1;
        text-align: center;
        font-weight: bold;
      }
    }
  }
`;
