import PropTypes from 'prop-types'

/*

Possibles types:

- danger
- dark
- info
- primary
- success
- warning

*/

const Message = (props) => {
  const type = props.type || 'warning'
  const classes = `message is-${type}`

  return (
    <div className={ classes }>
      <div className="message-header">
        <strong>
          { props.title }
        </strong>
      </div>
      <div className="message-body">
        { props.children }
      </div>
    </div>
  )
}

Message.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.string
  ]),
  title: PropTypes.string,
  type: PropTypes.string
}

export default Message
