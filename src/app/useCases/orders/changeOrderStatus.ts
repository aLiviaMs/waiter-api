import { Request, Response } from 'express';
import { EnumStatusOrder } from '../../../common/Enums/EnumStatusOrder';

import { Order } from '../../models/Order';

export async function changeOrderStatus(req: Request, res: Response) {
	try {
		const { orderId } = req.params;
		const { status } = req.body;

		if(!Object.keys(EnumStatusOrder).includes(status)) {
			return res.status(400).json({
				error: `Status should be one of these: ${Object.keys(EnumStatusOrder)}`
			});
		}

		await Order.findByIdAndUpdate(orderId, { status });
		res.sendStatus(204);
	} catch(error) {
		console.log(error);
		res.sendStatus(500);
	}
}
