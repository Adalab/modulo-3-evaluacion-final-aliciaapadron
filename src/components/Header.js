import logo from '../images/owen-wilson-owen.gif';
function Header(props) {
  return (
    <>
      <header className="header">
        <img
          className="header__logo"
          src={logo}
          alt="Gif de Owen Wilson"
          title="Gif de Owen Wilson"
        />
        <h1 className="header__title">
          Search your<span className="header__title__span"> WOW!</span>
        </h1>
      </header>
    </>
  );
}
export default Header;
