import mongoose from 'mongoose';
import CertificateSchema from '../schemas/certificateSchema.js';

const { model } = mongoose;
const Certificate = model('certificate', CertificateSchema);

class CertificateModel {
    constructor() {
        this.certificate = Certificate;
    }

    async findById(userId) {
        const result = this.certificate
            .find({ user: userId })
            .populate('user', 'name');
        return result;
    }

    async addCertificate(userId, info) {
        const result = this.certificate.create({
            user: userId,
            name: info.name,
            image: info.image,
        });
        return result;
    }
}

const certificateModel = new CertificateModel();
export default certificateModel;
