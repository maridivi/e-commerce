const Airtable = require("airtable");
const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  process.env.AIRTABLE_BASE_ID
);

const table = base(process.env.AIRTABLE_TABLE_NAME);

export default async function getProducts(req, res) {
  try {
    const records = await table
      .select({
        maxRecords: 100,
        view: "All furniture",
      })
      .all();

    const products = records.map((record) => ({
      title: record.fields.Name,
      category: record.fields.Type,
      room: record.fields.Settings,
      image: record.fields.Images[0].url,
      price: record.fields["Unit cost"],
      description: record.fields.Description,
      id: record.id,
    }));

    res.status(200).json(products);
  } catch (err) {
    console.error(err);
    res.status(500);
  }
}
