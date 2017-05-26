import MenuLabel from './menu/menuLabel'
import MenuList from './menu/menuList'
import data from './../data/subjects.json'

const Aside = () => (
  <aside className="menu">
    <MenuLabel label="Subjects"/>
    <MenuList list={ data.subjects }/>
  </aside>
)

export default Aside
