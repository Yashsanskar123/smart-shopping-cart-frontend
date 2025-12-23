export function extractCategories(products) {
  const categorySet = new Set()

  products.forEach(p => {
    if (p.category) {
      const topCategory = p.category.split("|")[0]
      categorySet.add(topCategory)
    }
  })

  return Array.from(categorySet)
}
