import axios from "axios";
import allowCors from "../../utils/allowCors";

const handler = (request, response) => {
  // const { limit } = request.body;

  axios
    .get("https://fakestoreapi.com/products")
    .then((res) => {
      response.json(res.data);
    })
    .catch((err) => {
      console.log({ err });
      response.status(400);
    });
};

export default allowCors(handler);
