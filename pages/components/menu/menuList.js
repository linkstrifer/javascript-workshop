import PropTypes from 'prop-types'
import Link from 'next/link'

const MenuList = (props) => (
  <ul className="menu-list">
    {
      props.list.map((item, index) => (
        <li key={ index }>
          <Link href={`/${ item.id }`}>
            <a>
              { item.label }
            </a>
          </Link>
        </li>
      ))
    }
  </ul>
)

MenuList.propTypes = {
  list: PropTypes.array
}

export default MenuList
