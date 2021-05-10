import PropTypes from "prop-types"
import Button from "./Button"
import { useLocation } from "react-router-dom"

const Header = ({ title, onShowAdd, showAdd }) => {
  const location = useLocation()

  return (
    <header className='header'>
      <h1>Task Tracker</h1>
      {location.pathname === "/" && (
        <Button
          color={showAdd ? "red" : "green"}
          text={showAdd ? "Close" : "Add"}
          onClick={onShowAdd}
        />
      )}
    </header>
  )
}

Header.defaultProps = {
  title: "defaultTitle",
}

Header.prototype = {
  title: PropTypes.string.isRequired,
}

export default Header
