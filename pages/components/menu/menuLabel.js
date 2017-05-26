import PropTypes from 'prop-types'

const MenuLabel = (props) => (
  <p className="menu-label">
    { props.label }
  </p>
)

MenuLabel.propTypes = {
  label: PropTypes.string.isRequired
}

export default MenuLabel
