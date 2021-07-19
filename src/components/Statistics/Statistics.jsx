import { List, Item } from './Statistics.styled'
import PropTypes from 'prop-types'
import { ImSmile, ImSad, ImNeutral } from 'react-icons/im'

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <List>
      <Item>
        <ImSmile /> Good: {good}
      </Item>
      <Item>
        <ImNeutral /> Neutral: {neutral}
      </Item>
      <Item>
        <ImSad /> Bad: {bad}
      </Item>
      <Item>Total: {total}</Item>
      <Item>Positive feedback: {positivePercentage}%</Item>
    </List>
  )
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
}
