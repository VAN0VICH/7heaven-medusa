import type { Query } from "@medusajs/framework";
import { ContainerRegistrationKeys } from "@medusajs/framework/utils";

export const POST = async (req, res) => {
	const query: Query = req.scope.resolve(ContainerRegistrationKeys.QUERY);

	const { data } = await query.graph({
		entity: "product",
		//TODO:
		fields: ["id"],
		pagination: { skip: 0, take: 100 },
	});

	res.json({ data });
};
