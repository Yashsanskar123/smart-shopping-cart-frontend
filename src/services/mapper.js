export function mapProduct(apiProduct) {
  return {
    id: apiProduct.product_id,
    title: apiProduct.product_name,
    price: apiProduct.discounted_price,
    actualPrice: apiProduct.actual_price,
    discount: apiProduct.discount_percentage,
    rating: apiProduct.rating,
    ratingCount: apiProduct.rating_count,
    image: apiProduct.img_link,
    category: apiProduct.category,
  }
}
