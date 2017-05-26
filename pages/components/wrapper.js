import PropTypes from 'prop-types'
import Aside from './aside'

const Wrapper = (props) => {
  const content = props.children

  return (
    <div className="section">
      <div className="columns">
        <div className="column is-3">
          <Aside/>
        </div>
        <div className="column is-9">
          { content }
        </div>
      </div>
    </div>
  )
}

Wrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ])
}

export default Wrapper
