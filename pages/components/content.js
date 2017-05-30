import PropTypes from 'prop-types'

const style = {
  padding: '1em'
}

const Content = (props) => {
  const content = props.children

  return (
    <div className="content" style={ style }>
      { content }
    </div>
  )
}

Content.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ])
}

export default Content
