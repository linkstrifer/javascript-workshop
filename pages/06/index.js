import Head from './../components/head'
import Wrapper from './../components/wrapper'
import Hero from './../components/hero'
import Content from './../components/content'

// ---

import data from './../data/subjects.json'
import content from './content'
import tests from './tests'

const subject = data.subjects.find((item) => item.id === '06')

class Subject extends React.Component {
  componentDidMount() {
    tests()
  }

  componentDidUpdate() {
    tests()
  }

  render() {
    return  (
      <Wrapper>
        <Head title={ subject.label }/>
        <Hero title={ subject.label }/>
        <Content>
          { content }
        </Content>
      </Wrapper>
    )
  }
}


export default Subject
