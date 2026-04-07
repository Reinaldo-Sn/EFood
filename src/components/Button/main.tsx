import type { ReactNode } from 'react'

import { ButtonInfo, ButtonLink } from './styles'

type Props = {
  type: 'button' | 'link'
  variant: 'primary' | 'secondary'
  title: string
  children: ReactNode
  onClick?: () => void
  to?: string
}

const Button = ({ type, children, title, to, onClick, variant }: Props) => {
  if (type === 'button') {
    return (
      <ButtonInfo type="button" title={title} onClick={onClick} $variant={variant}>
        {children}
      </ButtonInfo>
    )
  }

  return (
    <ButtonLink to={to as string} title={title} $variant={variant}>
      {children}
    </ButtonLink>
  )
}

export default Button
