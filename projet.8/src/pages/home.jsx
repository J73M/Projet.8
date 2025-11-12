import Banner from "../components/banner/banner.jsx";
import homeBanner from "../assets/banner_img.png";
import Gallery from "../components/gallery/gallery.jsx";

export default function HomePage() {
  return (
    <main className="home-page">
      <Banner
        image={homeBanner}
        alt="Bannière d'accueil"
        title= {<span> Chez vous, <br className="mobile-break"/>partout et ailleurs</span>}
      />
      <Gallery />
    </main>
  );
}
