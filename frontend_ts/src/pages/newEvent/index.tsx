import React from 'react';
import { Title, Form, } from './styles';

const NewEvent: React.FC = () => {
    return (
        <>

            <Title>Cadastro de evento</Title>
            <p>Prencha os campos abaixo</p>

        <Form>
            <input placeholder="Nome"></input>
            <input placeholder="Local"></input>
            <input placeholder="Foto"></input>
            <input placeholder="Comentário"></input>

            <button type="submit">Cadastrar</button>
        </Form>

        </>
    );
};

export default NewEvent;