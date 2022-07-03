import React from 'react';
import { useHistory } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function Login() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState(false);
  const history = useHistory();

  const handleLogin = () => {
    fetch('http://localhost:3001/sessao/criar', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({
        email: email.trim(),
        senha: password.trim()
      }),
    })
    .then((resp) => {
      if (resp.status === 401) return setError(true);
      history.push('/despesas');
    })
    
  };

  const handleInputChange = (event: React.ChangeEvent<{ value: string }>, dispatch: React.Dispatch<React.SetStateAction<string>>) => dispatch(event.target.value);

  return (
    <div>
      <h1>Login</h1>
    <form noValidate autoComplete="off">
      <div>
      <TextField
          error={error}
          id="Email"
          label="Email"
          type="email"
          variant="outlined"
          onChange={(e) => handleInputChange(e, setEmail)}
        />
        <TextField
          error={error}
          id="Password"
          label="Password"
          type="password"
          variant="outlined"
          onChange={(e) => handleInputChange(e, setPassword)}
        />
      </div>
      {error && <div>Invalid credentials. Please, try again.</div>}
      <Button variant="contained" color="primary" onClick={handleLogin}>
        Login
      </Button>
    </form>
    </div>
  )
}

export default Login;