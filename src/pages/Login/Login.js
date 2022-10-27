import React, { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../Context/AuthProvider";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";



const Login = () => {
    const {providerLogin,logIn} = useContext(AuthContext);

    const navigate =  useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleGoogleSignIn = () =>{
        
        providerLogin(googleProvider)
        .then(result => console.log(result.user))
        .catch(error => console.log(error))
        navigate(from,{replace:true});
    }
    const handleGithubSignIn = () =>{
        providerLogin(githubProvider)
        .then(result => console.log(result.user))
        .catch(error => console.log(error))
        navigate(from,{replace:true});
    }

    const signIn = (event) =>{
        event.preventDefault();

        const form = event.target;

        const email = form.email.value;
        const password = form.password.value;

        logIn(email,password)
        .then(result => console.log(result.user))
        .catch(error => console.error(error));
        form.reset();
        navigate(from,{replace:true});
    }

  return (
    <Container>
      <Row>
        <Col md="6" className="mx-auto card p-4">
            <h3>Login</h3>
          <Form onSubmit={signIn}>
          <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control name='email' type="email" placeholder="yourname@domain.com" required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control name='password' type="password" placeholder="******" required/>
            </Form.Group>

            <Button variant="primary" type="submit" className="mb-2">
              Login
            </Button>
            <div>
            <Button onClick={handleGoogleSignIn} variant="outline-success" size="lg" className="d-block w-100 mb-2"> <FaGoogle></FaGoogle> </Button>
            <Button onClick={handleGithubSignIn} variant="outline-warning" size="lg" className="d-block w-100 mb-2"> <FaGithub></FaGithub> </Button>
            </div>
            
            <Link to='/register'>Register</Link>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
