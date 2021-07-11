/* function Balance() {
    const ctx = React.useContext(UseContext);
    return (
        <h1>Balanca</h1>
    );
} */

function Balance() {
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
            header="Balance"
            status={status}
            body={show ? (
            <>
            Hi {ctx.users[0].name}, you balance account is: <br/>
            <h1>$ {JSON.stringify(ctx.users[0].balance)}
            </h1>
            <h2 id="total">{status}</h2>
            </>
            ) : ( 
            <>
            <h5>Success</h5>
            <button type="submit" className="btn btn-light" onClick={clearForm}>Add another account</button>
            </>)}
        />
    );
}