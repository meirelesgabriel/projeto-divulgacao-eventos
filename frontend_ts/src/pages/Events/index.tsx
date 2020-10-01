import React from 'react';
import { Title, Events, Subtitulo } from './styles'

const ShowEvents: React.FC = () => {
    return (
        <>
            <Title>
                <h1>Bem-vindo</h1>
                <p>usuário</p>
            </Title>

            <Events>

                <img src="data:image/png;base64,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" alt="Imagem do evento"/>

                <div>
                    <strong>Nome do evento</strong>
                    <p>Descrição do evento</p>
                </div>

                <div id="icon">
                    <img id="like" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik01My4zMzMsMjI0QzIzLjkzNiwyMjQsMCwyNDcuOTM2LDAsMjc3LjMzM1Y0NDhjMCwyOS4zOTcsMjMuOTM2LDUzLjMzMyw1My4zMzMsNTMuMzMzaDY0DQoJCQljMTIuMDExLDAsMjMuMDYxLTQuMDUzLDMyLTEwLjc5NVYyMjRINTMuMzMzeiIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNNTEyLDMwNGMwLTEyLjgyMS01LjA3Ny0yNC43NjgtMTMuODg4LTMzLjU3OWM5Ljk2My0xMC45MDEsMTUuMDQtMjUuNTE1LDEzLjY1My00MC43MjUNCgkJCWMtMi40OTYtMjcuMTE1LTI2LjkyMy00OC4zNjMtNTUuNjM3LTQ4LjM2M0gzMjQuMzUyYzYuNTI4LTE5LjgxOSwxNi45ODEtNTYuMTQ5LDE2Ljk4MS04NS4zMzNjMC00Ni4yNzItMzkuMzE3LTg1LjMzMy02NC04NS4zMzMNCgkJCWMtMjIuMTY1LDAtMzcuOTk1LDEyLjQ4LTM4LjY3NywxMi45OTJjLTIuNTE3LDIuMDI3LTMuOTg5LDUuMDk5LTMuOTg5LDguMzQxdjcyLjM0MWwtNjEuNDQsMTMzLjA5OWwtMi41NiwxLjMwMXYyMjguNjUxDQoJCQlDMTg4LjAzMiw0NzUuNTg0LDIxMC4wMDUsNDgwLDIyNCw0ODBoMTk1LjgxOWMyMy4yMzIsMCw0My41NjMtMTUuNjU5LDQ4LjM0MS0zNy4yNjljMi40NTMtMTEuMTE1LDEuMDI0LTIyLjMxNS0zLjg2MS0zMi4wNDMNCgkJCWMxNS43NjUtNy45MzYsMjYuMzY4LTI0LjE3MSwyNi4zNjgtNDIuNjg4YzAtNy41NTItMS43MjgtMTQuNzg0LTUuMDEzLTIxLjMzM0M1MDEuNDE5LDMzOC43MzEsNTEyLDMyMi40OTYsNTEyLDMwNHoiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==" alt="icone like"/>
                    <img id="dislike" src="data:image/svg+xml;base64,PHN2ZyBpZD0iQm9sZCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMjQgMjQiIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSI1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0ibTIyLjI1IDFoLTIuNWMtLjk2NSAwLTEuNzUuNzg1LTEuNzUgMS43NXYxMS41YzAgLjk2NS43ODUgMS43NSAxLjc1IDEuNzVoMi41Yy45NjUgMCAxLjc1LS43ODUgMS43NS0xLjc1di0xMS41YzAtLjk2NS0uNzg1LTEuNzUtMS43NS0xLjc1eiIvPjxwYXRoIGQ9Im01LjExOS43NWMtMS45NSAwLTMuNjEgMS40LTMuOTQgMy4zMmwtMS4xMiA2LjVjLS40MiAyLjQ1IDEuNDYgNC42OCAzLjk0IDQuNjhoNC43MnMtLjc1IDEuNS0uNzUgNGMwIDMgMi4yNSA0IDMuMjUgNHMxLjUtLjUgMS41LTNjMC0yLjM3NiAyLjMwMS00LjI4OCAzLjc4MS01LjI3M3YtMTIuMzg4Yy0xLjYwMS0uNzQxLTQuODA2LTEuODM5LTkuNzgxLTEuODM5eiIvPjwvc3ZnPg==" alt="icone dislike" />
                </div>
            </Events>

            <Subtitulo>
                <a href="/">sair</a>
            </Subtitulo>
        </>
    );
};

export default ShowEvents;