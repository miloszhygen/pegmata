export function buildImageObj(source) {
  return {
    asset: {
      _ref: source.asset && (source.asset._ref || source.asset._id)
    },
    // Doesn't add these props if they are empty
    ...(source.crop && { crop: source.crop }),
    ...(source.hotspot && { hotspot: source.hotspot })
  };
}
