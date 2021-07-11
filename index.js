function Spa() {
    return (
        <HashRouter>
            <NavBar/>
            <UserContext.Provider value={{users: [{name:'abel', email:'abel@mit.edu', password:'secret', balance:100}]}}>
            {/* the 'exact'-attribute means 'default' */}
                <Route path="/" exact component={Home}/>
                <Route path="/CreateAccount/" component={CreateAccount}/>
                <Route path="/login/" component={Login}/>
                <Route path="/deposit/" component={Deposit}/>
                <Route path="/withdraw/" component={Withdraw}/>
                <Route path="/balance/" exact component={Balance}/>
                <Route path="/alldata" exact component={AllData}/>
            </UserContext.Provider>
            <Card/>
        </HashRouter>
);
}

ReactDOM.render(
    <Spa/>, 
    document.getElementById('root')
);