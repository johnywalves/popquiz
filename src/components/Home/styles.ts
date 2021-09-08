import { ReactNode } from 'react'

import styled from 'styled-components'
import { ITheme } from 'types/database'

interface BackgroundProps {
  image: string
}

export const Background = styled.div`
  flex: 1;
  background-image: url('${({ image }: BackgroundProps) => image}');
  background-size: cover;
  background-position: center;
`

interface TitleProps {
  theme: ITheme
  children: ReactNode
}

export const Title = styled.h1`
  font-size: 5rem;
  color: ${({ theme }: TitleProps) => theme.colors.secondary};
`
