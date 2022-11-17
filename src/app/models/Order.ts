// MONGOOSE
import {model, Schema} from 'mongoose';

// ENUMS
import { EnumStatusOrder } from '../../common/Enums/EnumStatusOrder';

export const Order = model('Order', new Schema({
	table: {
		type: String,
		required: true
	},
	status: {
		type: String,
		enum: [EnumStatusOrder],
		default: EnumStatusOrder.WAITING
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
	products: {
		required: true,
		type: [{
			product: {
				type: Schema.Types.ObjectId,
				required: true,
				ref: 'Product'
			},
			quantity: {
				type: Number,
				default: 1
			}
		}]
	}
}));
