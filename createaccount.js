function CreateAccount() {
    const [show, setShow] = React.useState(true);
    const [status, setStatus] = React.useState('');
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const ctx = React.useContext(UserContext);
    

    // Handler Functions
    function validate(field, label) {
        if (!field) {
            setStatus('Error: ' + label);
            setTimeout(() => setStatus(''), 3000);
            return false;
        } // else
        return true
    }

    function handleCreate() {
        console.log(name, email, password);
        if (!validate(name, 'name')) return;
        if (!validate(email, 'email')) return;
        if (!validate(password, 'password')) return;
        ctx.users.push({name, email, password, balance:100});
        setShow(false);
    }

    function clearForm() {
        setName('');
        setEmail('');
        setPassword('');
        setShow(true);
    }
    
    return (
        <Card
            bgcolor="primary"
            header="Create Account"
            status={status}
            body={show ? (
            <>
            Name <br/>
            <input type="input" className="form-contorl" id="name" placeholder="Enter name"
                value={name} onChange={e => setName(e.currentTarget.value)} /><br/>
            Email Address<br/>
            <input type="input" className="form-contorl" id="name" placeholder="Enter email"
                value={email} onChange={e => setEmail(e.currentTarget.value)} /><br/>
            Password<br/>
            <input type="" className="form-contorl" id="name" placeholder="Enter password"
                value={password} onChange={e => setPassword(e.currentTarget.value)} /><br/><br/>
            <button type="submit" className="btn btn-light" onClick={handleCreate}>Create Account</button>
            </>
            ) : (
            <>
            <h5>Success</h5>
            <button type="submit" className="btn btn-light" onClick={clearForm}>Add another account</button>
            </>)}
        />
    );
}