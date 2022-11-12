import Button from "./Button"

const Header = ({title}) => {
  return (
    <header className="header">
        <h1>Task Tracker</h1>
        <Button text='Add'/>
    </header>
  )
}

Header.defaultProps = {
    title: 'hello main',
}

export default Header