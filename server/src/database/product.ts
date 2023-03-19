import { randomUUID } from 'crypto';
import { model, Schema } from 'mongoose';

export interface IProduct {
    id: string | number;
    name: string;
    description?: string;
    qty?: number;
    picture?: string;
}

const productSchema = new Schema<IProduct>({
    id: { type: String, default: randomUUID() },
    name: String,
    description: String,
    qty: Number,
    picture: String
});

export const Product = model<IProduct>('Product', productSchema);
