import { getRepository } from 'typeorm';
// import { startOfHour, parseISO } from 'date-fns';
import Eventos from '../models/Eventos';

interface Request {
    dono_evento_id: string;
    nome: string;
    local: string;
    comentario: string;
    photo: string;
}

class EventosController {
    public async store({
        dono_evento_id,
        nome,
        local,
        comentario,
        photo,
    }: Request): Promise<Eventos> {
        const eventosRepository = getRepository(Eventos);

        const evento = eventosRepository.create({
            dono_evento_id,
            nome,
            local,
            comentario,
            photo,
        });
        await eventosRepository.save(evento);
        return evento;
    }
}

export default EventosController;
