import mongoose from 'mongoose';

const { Schema } = mongoose;
const CertificateSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users',
        required: true,
    },
    certificate: [
        {
            name: {
                type: String,
                required: true,
            },
            image: {
                type: String,
                required: true,
            },
        },
    ],
});

export default CertificateSchema;
