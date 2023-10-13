import { json, redirect } from 'react-router-dom';
import AuthForm from '../components/AuthForm';

function AuthenticationPage() {
  return <AuthForm />;
}

export default AuthenticationPage;

export async function authAction ({request}) {

  const searchParams = new URL(request.url).searchParams;
  console.log(searchParams);

  const mode = searchParams.get('mode') || 'login';
  console.log(mode);

  if(mode !== 'login' && mode !== 'signup') {
    throw json({message: 'Error occured! No Mode'}, {status: 404});
  }

  const data = await request.formData();
  console.log(data);

  const authData = {
    email: data.get('email'),
    password: data.get('password')
  }

  console.log(authData);

  const response = await fetch('http://localhost:8080/' + mode, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(authData)
  });

  if (response.status === 422 || response.status === 401) {
    return response;
  }

  if (!response.ok) {
    throw json({message: 'Could not Auth'}, { status: 500 });
  }

  const resData = await response.json()
  console.log(resData);

  const token = resData.token;

  localStorage.setItem('token', token);

  const expiration = new Date();
  expiration.setHours(expiration.getHours() + 1);
  localStorage.setItem('expirationDate', expiration.toISOString());

  return redirect('/events');

}