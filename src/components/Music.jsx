import "./Music.css";
import epCover from "../assets/images/technicolor-ep-cover.png";
import { FaSpotify, FaYoutube, FaApple } from "react-icons/fa";

const tracks = [
    {
    title: "Tus Ojos Brillar ",
    links: {
      spotify: "https://open.spotify.com/track/5KOMDg92WlCa1nZXO69dZ7?si=b562ff28df4d4bf2",
      youtube: "https://www.youtube.com/watch?v=Z2xPe4Mql7U&list=OLAK5uy_kMLqOg4FOj_HMHz7MLuhZaP1Q2GQsdJ7E",
      apple: "https://music.apple.com/es/song/tus-ojos-brillar/1842540670"
    }
  },
  
  {
    title: "Hay un lugar",
    links: {
      spotify: "https://open.spotify.com/track/1zmpdSH7rwNCXmWhbTfNpA?si=d7478befbfbb43ae",
      youtube: "https://www.youtube.com/watch?v=0AB9gK4JBO0&list=OLAK5uy_kMLqOg4FOj_HMHz7MLuhZaP1Q2GQsdJ7E&index=2",
      apple: "https://music.apple.com/es/song/hay-un-lugar/1807642695"
    }
  },
    {
    title: "Vichyssoise",
    links: {
      spotify: "https://open.spotify.com/track/2PJcPbVofiqoGamOhYwy9Z?si=100c9b0eb8034849",
      youtube: "https://www.youtube.com/watch?v=3HNLsFjNYZA&list=OLAK5uy_kMLqOg4FOj_HMHz7MLuhZaP1Q2GQsdJ7E&index=3",
      apple: "https://music.apple.com/es/song/vichyssoise/1842540672"
    }
  },
    {
    title: "El Color de Tus Ojos",
    links: {
      spotify: "https://open.spotify.com/track/21MThqVMaAAKZrqhwU9LBF?si=ce99648fbe704d7e",
      youtube: "https://www.youtube.com/watch?v=GSpeJoU460c&list=OLAK5uy_kMLqOg4FOj_HMHz7MLuhZaP1Q2GQsdJ7E&index=4",
      apple: "https://music.apple.com/es/song/el-color-de-tus-ojos-feat-ni%C3%B1a-bl%C3%B3m/1817073683"
    }
  },
  {
    title: "Sí, Ya Sé",
    links: {
      spotify: "https://open.spotify.com/track/4U1BT6qCsUCNZxlZQffUV4?si=3a07370068cc4f5d",
      youtube: "https://www.youtube.com/watch?v=cJFl2Lo_B48&list=OLAK5uy_kMLqOg4FOj_HMHz7MLuhZaP1Q2GQsdJ7E&index=5",
      apple: "https://music.apple.com/es/song/s%C3%AD-ya-s%C3%A9-feat-elle-le%C3%B3n-gallagher/1838580540"
    }
  },
  // añade más canciones aquí
];

export default function Music() {
  return (
    <section className="music" id="music">
      <div className="music-container">
        <div className="music-cover">
          <img src={epCover} alt="EP Technicolor" />
        </div>
        <div className="music-list">
          {tracks.map((track, i) => (
            <div key={i} className="track">
              <h3>{track.title}</h3>
              <div className="track-links">
                <a href={track.links.spotify} target="_blank" rel="noopener noreferrer">
                  <FaSpotify />
                </a>
                <a href={track.links.youtube} target="_blank" rel="noopener noreferrer">
                  <FaYoutube />
                </a>
                <a href={track.links.apple} target="_blank" rel="noopener noreferrer">
                  <FaApple />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}