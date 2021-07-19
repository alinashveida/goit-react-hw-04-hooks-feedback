import { useState } from 'react'
import { Container } from './App.styled'

import Statistics from '../Statistics/Statistics'
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions'
import Section from '../Section/Section'
import Notification from '../Notification/Notification'

export default function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const countTotalFeedback = () => {
    return good + neutral + bad
  }

  const countPositiveFeedbackPercentage = () => {
    const positiveFeedback = (100 * good) / countTotalFeedback() || 0

    return Math.round(positiveFeedback)
  }

  const onLeaveFeedbackButton = (event) => {
    const { name } = event.target

    switch (name) {
      case 'good':
        setGood((state) => state + 1)
        break

      case 'neutral':
        setNeutral((state) => state + 1)
        break

      case 'bad':
        setBad((state) => state + 1)
        break

      default:
        return null
    }
  }

  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={{ good, neutral, bad }}
          onLeaveFeedback={onLeaveFeedbackButton}
        />
      </Section>

      <Section title="Statistics">
        {countTotalFeedback() > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
    </Container>
  )
}
