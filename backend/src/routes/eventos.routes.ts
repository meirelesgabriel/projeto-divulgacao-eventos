import { Router } from 'express';
import { getRepository } from 'typeorm';
import multer from 'multer';

import EventosController from '../app/controllers/EventosController';
import Eventos from '../app/models/Eventos';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import uploadConfig from '../config/upload';
import PhotoEventoController from '../app/controllers/PhotoEventoController';

const eventosRouter = Router();
const upload = multer(uploadConfig);

eventosRouter.post('/', upload.single('photo'), async (request, response) => {
    try {
        const { dono_evento_id, nome, local, comentario } = request.body;
        const { filename } = request.file;
        const eventosController = new EventosController();
        const evento = await eventosController.store({
            dono_evento_id,
            nome,
            local,
            comentario,
            photo: filename,
        });
        return response.json(evento);
    } catch (erro) {
        return response.status(400).json({ error: erro.message });
    }
});

// listar todos os eventos
eventosRouter.get('/', ensureAuthenticated, async (request, response) => {
    // vamos atribuir o getRepository passando o model de eventos ao eventosRepositorio
    const eventosRepositorio = getRepository(Eventos);
    // declarar um objeto para receber a busca feita com o método .find();
    const evento = await eventosRepositorio.find();

    // usando a data de criação para ordenar, porque não criei um campo data
    const sortedEventos = evento
        .slice()
        .sort((a, b) => (b.created_at ? -1 : a.created_at ? 1 : 0));

    console.log(sortedEventos);
    // console.log(request.user);
    return response.json(sortedEventos);
});

// listar um único evento
eventosRouter.get('/:id', ensureAuthenticated, async (request, response) => {
    const eventosRepositorio = getRepository(Eventos);
    const { id } = request.params;
    const user = await eventosRepositorio.findOne(id);
    return response.json(user);
});

// excluir um evento
eventosRouter.delete('/:id', ensureAuthenticated, async (request, response) => {
    const eventosRepositorio = getRepository(Eventos);
    const { id } = request.params;
    const evento = await eventosRepositorio.findOne(id);
    if (evento.dono_evento_id === request.user.id) {
        await eventosRepositorio.delete(id);
        return response.send();
    }
    return response
        .status(400)
        .json({ error: 'Exclusão negada: este evento não lhe pertence.' });
});

/* eventosRouter.patch(
    '/photo',
    ensureAuthenticated,
    upload.single('photo'),
    async (request, response) => {
        try {
            const photoEventoController = new PhotoEventoController();
            await photoEventoController.update({
                // user_id: request.user.id,
                // event_id: request.evento,
                photoFileName: request.file.filename,
            });
            console.log(request.file);
            // delete user.password;
            // return response.json(evento)
            return response.json({ ok: true });
        } catch (err) {
            return response.status(400).json({ error: err.message });
        }
    },
); */

export default eventosRouter;
