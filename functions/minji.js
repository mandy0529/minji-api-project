require('dotenv').config();

const Airtable = require('airtable-node');

const API_KEY = process.env.REACT_APP_AIRTABLE_API;

const airtable = new Airtable({apiKey: API_KEY})
  .base('appNjnXw0btZED7Ys')
  .table('colors');

exports.handler = async (event, context) => {
  const {id} = event.queryStringParameters;
  if (id) {
    try {
      const data = await airtable.retrieve(id);
      if (data.error) {
        return {
          statusCode: 404,
          body: `no provided data via id : ${id}`,
        };
      }
      return {
        statusCode: 200,
        body: JSON.stringify(data),
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: 'not found any data',
      };
    }
  }
  try {
    const {records} = await airtable.list();
    const colors = records.map((item) => {
      console.log(item, 'item');
      const {
        id,
        fields: {color, type, img, season},
      } = item;
      const url = img[0].url;
      const seasons = season[0];
      return {id, color, type, seasons, url};
    });
    return {
      statusCode: 200,
      body: JSON.stringify(colors),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: 'not found any datas',
    };
  }
};
