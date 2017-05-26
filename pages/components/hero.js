import PropTypes from 'prop-types'

const style = {
  padding: '1em'
}

const Hero = (props) => {
  const title = props.title

  return (
    <div className="hero is-info" style={ style }>
      <div className="container">
        <div className="hero-body">
          <h1 className="title">
            { title }
          </h1>
        </div>
      </div>
    </div>
  )
}

Hero.propTypes = {
  title: PropTypes.string
}

export default Hero
