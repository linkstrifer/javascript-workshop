import PropTypes from 'prop-types'
import SyntaxHighlighter, { registerLanguage } from "react-syntax-highlighter/dist/light"
import { docco } from 'react-syntax-highlighter/dist/styles'
import js from 'react-syntax-highlighter/dist/languages/javascript'

registerLanguage('javascript', js)

const Code = (props) => (
  <SyntaxHighlighter language="javascript" style={ docco }>
    { props.children }
  </SyntaxHighlighter>
)

Code.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ])
}

export default Code
