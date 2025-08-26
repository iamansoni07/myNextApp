export default async function ProductDetails(
  { params }: { params: Promise<{ productId: string}> }
) {
  const { productId} = await params;
  return (
    <h1>These are reviews of product {productId}</h1>
  );
}