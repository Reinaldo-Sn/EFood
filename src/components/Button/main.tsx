import type { ReactNode } from 'react'
import { ButtonInfo, ButtonLink } from './styles'

type Props = {
  type: 'button' | 'link'
  cores: 'primary' | 'secondary'
  title: string
  children: ReactNode
  onClick?: () => void
  to?: string
}

const Button = ({ type, children, title, to, onClick, cores }: Props) => {
  if (type === 'button') {
    return (
      <ButtonInfo type="button" title={title} onClick={onClick} $cores={cores}>
        {children}
      </ButtonInfo>
    )
  }

  return (
    <ButtonLink to={to as string} title={title} $cores={cores}>
      {children}
    </ButtonLink>
  )
}

export default Button
