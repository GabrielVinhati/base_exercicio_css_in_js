import styled from 'styled-components'
import colors from '../../themes/colors'

export const Form = styled.form`
  height: 360px;
  width: 100%;
  background-image: url('https://static.portaldaindustria.com.br/portaldaindustria/noticias/media/16_9/ti.jpg');
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${colors.primary};
    content: '';
    opacity: 0.6;
    border-radius: 12px;
  }

  @media (max-width: 768px) {
    height: auto;
    padding: 24px 0;
  }
`

export const FormContent = styled.div`
  position: relative;
  text-align: center;
  color: ${colors.secondary};
  z-index: 1;

  @media (max-width: 768px) {
    padding: 20px;
  }
`

export const HeroTitle = styled.h2`
  font-family: Gloock, serif;
  font-size: 48px;
  font-weight: bold;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 32px;
    letter-spacing
`
