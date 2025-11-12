import "./banner.css"

export default function Banner({ image, alt, title }) {
  return (
    <div className="banner-wrapper">
      <section className="banner">
        <img src={image} alt={alt} />
        {title && (<h1>{title}</h1>)}
      </section>
    </div>
  );
}

