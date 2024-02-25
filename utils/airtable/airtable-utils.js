import Airtable from "airtable";
const base = new Airtable({
  apiKey: process.env.TOKEN,
}).base(process.env.AIRTABLE_BASE_ID);

export const table = base(process.env.AIRTABLE_TABLE_NAME);
