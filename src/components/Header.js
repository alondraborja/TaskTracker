const Header = ({title}) => {
  return (
    <header>
        <h1>Hello {title}</h1>
    </header>
  )
}

Header.defaultProps = {
    title: 'hello main',
}

export default Header