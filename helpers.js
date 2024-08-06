export const formatPrice = (price) => {
  return new Intl.NumberFormat('sv').format(price).toString()
}
