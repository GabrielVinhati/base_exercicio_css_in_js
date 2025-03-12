import styled from 'styled-components'
import colors from '../../themes/colors'

export const VagaItem = styled.li`
  border: 1px solid ${colors.primary};
  background-color: ${colors.secondary};
  color: ${colors.primary};
  padding: 20px;
  transition: all 0.3s ease-in-out;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: ${colors.primary};
    color: ${colors.secondary};
    transform: translateY(-4px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  &:hover a {
    border-color: ${colors.secondary};
    background-color: ${colors.primary};
    color: ${colors.secondary};
  }
`

export const VagaTitle = styled.h3`
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 16px;
  letter-spacing: 1px;
  color: ${colors.primary};
`

export const VagaLink = styled('a')`
  border-color: ${colors.secondary};
  background-color: ${colors.primary};
  color: ${colors.secondary};
  display: inline-block;
  padding: 10px 20px;
  text-decoration: none;
  margin-top: 16px;
  font-weight: bold;
  font-size: 16px;
  border-radius: 8px;
  text-align: center;
  letter-spacing: 1px;

  &:hover {
    background-color: ${colors.secondary};
    color: ${colors.primary};
    border-color: ${colors.primary};
  }

  @media (max-width: 768px) {
    display: block;
  }
`
