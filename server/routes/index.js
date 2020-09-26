import express from 'express';
import { indexPage } from '../controllers';
const indexRouter = express.Router();
import Model from '../models/model';


const propertiesListModel = new Model('properties_list');

export const propertiesListPage = async (req, res) => {
	try {
		const data = await propertiesListModel.selectAll();
		return res.status(200).json({ property: data.rows });
	} catch (err) {
		return res.status(200).json({ messages: err.stack });
	}
};

export const filteredPropertiesPage = async (req, res) => {
    try {
		const data = await propertiesListModel.selectWithFilters( req.body );
		return res.status(200).json({ property: data.rows });
	} catch (err) {
		return res.status(200).json({ messages: err.stack });
	}
};

export const comparePropertiesPage = async (req, res) => {
    try {
		const data = await propertiesListModel.selectForCompare( req.body );
		return res.status(200).json({ property: data.rows });
	} catch (err) {
		return res.status(200).json({ messages: err.stack });
	}
};

indexRouter.get('/properties', propertiesListPage );
indexRouter.get('/filterProperties', filteredPropertiesPage );
indexRouter.get('/compareProperties', comparePropertiesPage );
indexRouter.get('/', indexPage);


export default indexRouter;