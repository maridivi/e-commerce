const Airtable = require("airtable");
const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  process.env.AIRTABLE_BASE_ID
);

const table = base(process.env.AIRTABLE_TABLE_NAME);

export default async function getProduct(req, res) {
  const { id } = req.query;

  try {
    const record = await table.find(id);

    const product = {
      title: record.fields.Name,
      category: record.fields.Type,
      room: record.fields.Settings,
      image: record.fields.Images[0].url,
      price: record.fields["Unit cost"],
      description: record.fields.Description,
      id: record.id,
    };

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ msg: "Something went wrong!" });
  }
}
