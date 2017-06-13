import PropTypes from 'prop-types'
import SyntaxHighlighter, { registerLanguage } from "react-syntax-highlighter/dist/light"
import { docco } from 'react-syntax-highlighter/dist/styles'
import js from 'react-syntax-highlighter/dist/languages/javascript'
import xml from 'react-syntax-highlighter/dist/languages/xml'

registerLanguage('javascript', js)
registerLanguage('html', xml)

const Code = (props) => {
  const language = props.language || 'javascript'

  return (
    <SyntaxHighlighter language={ language } style={ docco }>
      { props.children }
    </SyntaxHighlighter>
  )
}

Code.propTypes = {
  children: PropTypes.string,
  language: PropTypes.string
}

export default Code
