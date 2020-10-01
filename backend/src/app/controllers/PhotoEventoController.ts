/* import { getRepository } from 'typeorm';
import path from 'path';
import fs from 'fs';
import Eventos from '../models/Eventos';
import uploadConfig from '../../config/upload'; */

interface Request {
    // user_id: string;
    photoFileName: string;
}

class PhotoEventoController {
    public async update({ photoFileName }: Request): Promise<void> {
        /* public async update({ photoFileName }: Request): Promise<Eventos> {
        const eventosRepository = getRepository(Eventos);
        const user = await eventosRepository.findOne(dono_evento_id);
        if (!user) {
            throw new Error(
                'Somente usuários autenticados podem alterar a foto.',
            );
        }
        const evento = await eventosRepository.findOne(evento_id);
        if (evento.photo) {
            const eventoPhotoFilePath = path.join(
                uploadConfig.directory,
                evento.photo,
            );
            const eventoPhotoFileExists = await fs.promises.stat(
                eventoPhotoFilePath,
            );
            if (eventoPhotoFileExists) {
                await fs.promises.unlink(eventoPhotoFilePath);
            }
        }
        evento.photo = photoFileName;
        await eventosRepository.save(evento);
        return evento; */
    }
}

export default PhotoEventoController;
