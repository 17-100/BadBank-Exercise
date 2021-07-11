/* function Balance() {
    const ctx = React.useContext(UseContext);
    return (
        <h1>Balanca</h1>
    );
} */

function Deposit() {
    const [show, setShow] = React.useState(true);
    const [status, setStatus] = React.useState('');
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [balance, setBalance] = React.useState(0);
    const [deposit, setDeposit] = React.useState(0);
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
        ctx.users.push({name, email, password, balance});
        setShow(false);
    }

    const changeAmountDeposit = (event) => { 
        let deposit = Number(event.target.value);
        setDeposit(deposit);
    } 

    const addToBalance = () => {
        ctx.users[0].balance += deposit;
        setShow(false);
    }

    
/* 
    function addToBalance = (event) => {

    } */

    function clearForm() {
        setName('');
        setEmail('');
        setPassword('');
        setShow(true);
    }
    
    return (
        <Card
            bgcolor="primary"
            header="Deposit"
            status={status}
            body={show ? (
            <>
            Hi {ctx.users[0].name}, please enter the amount you want to deposit: <br/>
            
            
            <label className="label huge">
                <input type="number" width="200" onChange={changeAmountDeposit}></input>
                <input type="submit" width="200" value="Submit" onClick={addToBalance} ></input>
            </label>
            <h5>deposit amount: {deposit}</h5>
            </>
            ) : ( 
            <>
            <h5>Success</h5>
            <h6>New balance: $ {JSON.stringify(ctx.users[0].balance)}</h6>
            <button type="submit" className="btn btn-light" onClick={clearForm}>Deposit more money</button>
            </>)}
        />
    );
}