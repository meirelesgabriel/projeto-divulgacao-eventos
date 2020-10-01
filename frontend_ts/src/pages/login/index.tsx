import React from 'react';
import { Title, Form} from './styles'

const Login: React.FC = () => {
    return (
        <>
            <Title>Login</Title>
            <Form>
                <input placeholder="Usuário"/>
                <input placeholder="Senha"/>

                <button type="submit">Entrar</button>

                <a href="/newUser">Não tenho cadastro</a>
            </Form>
        </>
    );
};

export default Login;