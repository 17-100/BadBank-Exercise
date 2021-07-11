function NavBar() {
    return (<>
       {/* <a href="#">BadBank</a>,
        <a href="#/CreateAccount">Create Account</a>,
        <a href="#/login/">Login</a>,
        <a href="#/deposit">Deposit</a>,
        <a href="#/withdraw">Withdraw</a>,
        <a href="#/balance/">Balance</a>,
        <a href="#/alldata">AllData</a> */}

        {/* NavBar */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" href="#">BadBank</a>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">BadBank<span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#/CreateAccount">Create Account</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#/login">Login</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#/Deposit">Deposit</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#/withdraw">Withdraw</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#/balance">Balance</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#/alldata">AllData</a>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
  </div>
</nav>
        
    </>);
}