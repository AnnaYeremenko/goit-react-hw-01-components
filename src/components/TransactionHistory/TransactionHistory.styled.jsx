import styled from 'styled-components';

export const TableTransaction = styled.table`
  margin-top: 30px;
  text-align: center;
  width: 50%;
  border-spacing: 0;
  border-collapse: collapse;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
`;

export const Head = styled.thead`
  text-transform: uppercase;
  color: #ffff;
  background-color: #40d9ed;
  font-family: inherit;
`;
export const Column = styled.th`
  padding: 0.875em 5em;
  padding-top: 16px;
  padding-bottom: 16px;
  padding-right: 64px;
  padding-left: 64px;
  font-weight: normal;
  tbody &:first-child {
    text-transform: capitalize;
  }
  :not(:last-child) {
    border-right: 2px solid #f5f7f7;
  }
`;

export const Raw = styled.tr`
  :nth-child(even) {
    background-color: #e8ebeb;
  }
  :nth-child(odd) {
    background-color: #f5f7f7;
  }
`;