import { Component } from 'react';
import '../node_modules/modern-normalize/modern-normalize.css';
import Section from './components/Section';
import FeedbackOptions from './components/FeedbackOptions';
import Statistics from './components/Statistics';
import Notification from './components/Notification';


class App extends Component {

  state ={
    good: 0,
    neutral: 0,
    bad: 0
  }

  gainFeedback = option => {
    this.setState(prevState => ({ [option]: prevState[option] +1 }))
  }

  totalFeedback = () => {
    const stateValues = Object.values(this.state);
    let total = 0;

    for(const value of stateValues) {
      total += value;
    }
    return total;
  }
  countPositiveFeedbackPercentage = () => {
    const goodFeedbacks = this.state.good;
    const total = this.totalFeedback();
    const percentage = (goodFeedbacks / total) * 100;

    if(goodFeedbacks === 0) {
      return 0;
    }

    return Number(percentage.toFixed(1));
  }


  render() {
    return (
      <Section title="Please leave feedback">
        <FeedbackOptions 
        options={this.state} 
        onLeaveFeedback={this.gainFeedback}
        />
        {this.totalFeedback() === 0 ? 
        <Notification message="No feedback given"/> :
        <Statistics 
        good={this.state.good} 
        neutral={this.state.neutral} 
        bad={this.state.bad} 
        total={this.totalFeedback()} 
        positivePercentage={this.countPositiveFeedbackPercentage()} />
        }
      </Section>
      
    )
  };
}

export default App;
