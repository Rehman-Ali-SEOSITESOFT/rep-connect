import { token } from "@/hooks/token";
import { useDispatch } from "react-redux";
export const deleteCart = (id) => {
  fetch(`${process.env.NEXT_PUBLIC_URL}api/cart/${id}`, {
    headers: {
      "x-auth-token": token,
    },
    method: "DELETE",
  })
    .then((resp) => resp.json())
    .then((data) => {
      if (data.success === 1) {
        console.log(data);
        dispatch(cartItem());
      }
    });
  return;
};
