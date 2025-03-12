import styled from 'styled-components'
import colors from '../../themes/colors'

export const Header = styled.header`
  background-color: ${colors.primary};
  color: ${colors.secondary};
  text-align: center;
  padding: 32px 0;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  letter-spacing: 1px;
`
