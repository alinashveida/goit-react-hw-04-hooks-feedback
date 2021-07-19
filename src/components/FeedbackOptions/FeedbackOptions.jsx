import { Button } from './FeedbackOptions.styled'
import PropTypes from 'prop-types'

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <>
      {Object.keys(options).map((option) => (
        <Button
          key={option}
          type="button"
          onClick={onLeaveFeedback}
          name={option}
        >
          {option}
        </Button>
      ))}
    </>
  )
}

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
}
