export const addToCartApi = async () => {
  const data = fetch(`${process.env.NEXT_PUBLIC_URL}api/cart`, {
    method: "POST",
    headers: {},
    body:{}
  });
  const result = await data.json();
  return data;
};
