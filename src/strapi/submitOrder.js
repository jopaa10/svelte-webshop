import axios from "axios";
import url from "../strapi/URL";

async function submitOrder({ name, total, items, stripeTokenId, userToken }) {
  const response = await axios
    .post(
      `${url}/api/orders`,
      {
        data: { name, total, items, stripeTokenId },
      },
      {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      }
    )
    .catch((error) => {
      console.log(error);
    });

  return response;
}

export default submitOrder;
