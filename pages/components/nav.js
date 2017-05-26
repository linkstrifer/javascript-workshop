import MenuLabel from './menu/menuLabel'
import MenuList from './menu/menuList'
import data from './../data/subjects.json'

const navStyle = {
  position: 'fixed',
  left: 0,
  right: 0
}

const listStyle = {
  backgroundColor: 'white',
  paddingTop: '.5em',
  position: 'absolute',
  right: 0,
  top: '100%'
}

class Nav extends React.Component {
  state = {
    isOpen: false
  }

  toggleNav = () => {
    this.setState((prevState) => (
      {
        isOpen: !prevState.isOpen
      }
    ))
  }

  render() {
    const isOpen = this.state.isOpen
    const nav = () => (
      <div style={ listStyle }>
        <MenuLabel label="Subjects"/>
        <MenuList list={ data.subjects }/>
      </div>
    )

    return (
      <nav className="nav has-shadow is-hidden-tablet" style={ navStyle }>
        {
          isOpen && nav()
        }
        <div className="nav-right">
          <div className="nav-toggle">
            <button className="nav-toggle button is-white"
              onClick={ this.toggleNav }>
              <i className="fa fa-bars"/>
            </button>
          </div>
        </div>
      </nav>
    )
  }
}

export default Nav
