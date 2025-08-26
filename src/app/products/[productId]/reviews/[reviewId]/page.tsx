import { notFound } from "next/navigation";

export default async function ProductDetails(
  { params }: { params: Promise<{ productId: string; reviewId: string}> }
) {
  const { productId, reviewId} = await params;
  if (parseInt(reviewId) > 100) {
    notFound();
  }
  return (
    <h1>This is review {reviewId} of product {productId}</h1>
  );
}