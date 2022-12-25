import { table } from "./airtable-utils";

export default async function getProduct(id) {
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

    return JSON.parse(JSON.stringify(product));
  } catch (error) {
    console.log(error);
  }
}
