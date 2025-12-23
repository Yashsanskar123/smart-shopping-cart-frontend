export function groupCategories(rawCategories) {
  const grouped = {}

  rawCategories.forEach(cat => {
    if (!cat.name && !cat.category) return

    // category string (handle both cases)
    const categoryString = cat.name || cat.category

    // Split hierarchy
    const parts = categoryString.split("|")

    const parent = parts[0].trim()

    if (!grouped[parent]) {
      grouped[parent] = {
        name: parent,
        count: 0,
      }
    }

    grouped[parent].count += 1
  })

  // Convert object → array
  return Object.values(grouped)
}
