export default function ImageSlot({ src, alt = '', label = 'Section image' }) {
  if (src) {
    return <img className="editorial-image" src={src} alt={alt} />
  }

  return (
    <div className="image-slot" role="img" aria-label={`${label} image placeholder`}>
      <span className="image-slot-mark" aria-hidden="true">+</span>
      <span className="image-slot-title">Image space</span>
      <span className="image-slot-help">Set an image path in this section’s page data</span>
    </div>
  )
}
