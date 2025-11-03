import "./banner.css"

export default function Banner({ image, alt }) {
  return (
    <div className="banner-wrapper">
      <section className="banner">
        <img src={image} alt={alt} />
        <h1>Chez vous,<br className="mobile-break" /> partout et ailleurs</h1>
      </section>
    </div>
  )
}
