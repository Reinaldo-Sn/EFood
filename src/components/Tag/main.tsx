import { TagDestaque } from './styles'

type Props = {
  description: string
}

const Tag = ({ description }: Props) => <TagDestaque>{description}</TagDestaque>

export default Tag
