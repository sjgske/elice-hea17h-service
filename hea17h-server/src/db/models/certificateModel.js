import mongoose from 'mongoose';
import CertificateSchema from '../schemas/certificateSchema.js';

const { model } = mongoose;
const Certificate = model('certificates', CertificateSchema);

class CertificateModel {
    constructor() {
        this.certificate = Certificate;
    }

    async findById(userId) {
        const result = await this.certificate
            .findOne({ user: userId })
            .populate('user', 'name');
        return result;
    }

    async addCertificate(userId, info) {
        const result = await this.certificate.findOneAndUpdate(
            { user: userId },
            { $push: { certificate: { ...info } } },
            { upsert: true, new: true },
        );
        return result;
    }
}

const certificateModel = new CertificateModel();
export default certificateModel;
