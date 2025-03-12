import styled from 'styled-components'
import colors from '../../themes/colors'

export const Form = styled('form')`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: ${colors.secondary};
  padding: 24px;
  border-radius: 12px;
  margin-top: 40px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`

export const SearchButton = styled('button')`
  background-color: ${colors.primary};
  border: 1px solid ${colors.primary};
  height: 48px;
  padding: 0 20px;
  font-size: 18px;
  color: ${colors.secondary};
  margin-left: 8px;
  cursor: pointer;
  border-radius: 8px;
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: ${colors.secondary};
    color: ${colors.primary};
    transform: translateY(-2px);
  }
`

export const Field = styled('input')`
  padding: 12px 16px;
  font-size: 16px;
  border: 1px solid ${colors.primary};
  border-radius: 8px;
  outline-color: ${colors.primary};
  transition: border-color 0.3s;

  &:focus {
    border-color: ${colors.primary};
  }
`
