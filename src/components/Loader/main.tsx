import { createPortal } from 'react-dom'
import { Circle, Check, XLine, Overlay, Message } from './styles'

type Props = {
  status: 'success' | 'error'
}

const Loader = ({ status }: Props) =>
  createPortal(
    <Overlay>
      <svg width="80" height="80" viewBox="0 0 44 44">
        <Circle cx="22" cy="22" r="20" $status={status} />
        {status === 'success' ? (
          <Check points="12,22 19,30 32,14" />
        ) : (
          <>
            <XLine x1="15" y1="15" x2="29" y2="29" />
            <XLine x1="29" y1="15" x2="15" y2="29" />
          </>
        )}
      </svg>
      <Message $status={status}>
        {status === 'success' ? 'Item adicionado' : 'Item já adicionado no carrinho'}
      </Message>
    </Overlay>,
    document.body
  )

export default Loader
