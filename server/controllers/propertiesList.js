/** 
 * FIXME: Does not fetch data from table for some reason
 */

import Model from '../models/model';

const propertiesListModel = new Model('properties_list');
export const propertiesListPage = async (req, res) => {
  try {
    const data = await propertiesListModel.select('*');
    return res.status(200).json({ property: data.rows });
  } catch (err) {
    return res.status(200).json({ messages: err.stack });
  }
};
export const propertiesListPage = (req, res) => res.status(200).json({ message: "useless" });