import { table } from "./airtable-utils";

export default async function getProducts() {
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

    return JSON.parse(JSON.stringify(products));
  } catch (err) {
    console.error(err);
  }
}
