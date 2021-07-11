/* function Withdraw() {
    const ctx = React.useContext(UseContext);
    return (
        <h1>Withdraw</h1>
    );
} */



function Withdraw() {
    const [show, setShow] = React.useState(true);
    const [status, setStatus] = React.useState('');
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [balance, setBalance] = React.useState(0);
    const [withdrawal, setWithdrawal] = React.useState(0);
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

    const changeAmountWithdrawal = (event) => { 
        let withdrawal = Number(event.target.value);
        setWithdrawal(withdrawal);
    } 

    const withdrawFromBalance = () => {
        ctx.users[0].balance -= withdrawal;
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
            header="Cash Back"
            status={status}
            body={show ? (
            <>
            Hi {ctx.users[0].name}, please enter the amount you want to withdraw: <br/>
            
            
            <label className="label huge">
                <input type="number" width="200" onChange={changeAmountWithdrawal}></input>
                <input type="submit" width="200" value="Submit" onClick={withdrawFromBalance} ></input>
            </label>
            <h5>withdrawal amount: {withdrawal}</h5>
            </>
            ) : ( 
            <>
            <h5>Success</h5>
            <h6>New balance: $ {JSON.stringify(ctx.users[0].balance)}</h6>
            <button type="submit" className="btn btn-light" onClick={clearForm}>Withdraw more money</button>
            </>)}
        />
    );
}