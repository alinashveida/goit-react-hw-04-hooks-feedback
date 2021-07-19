import { Title, Wrapper } from './Section.styled'

export default function Section({ title, children }) {
  return (
    <Wrapper>
      <Title>{title}</Title>
      {children}
    </Wrapper>
  )
}
