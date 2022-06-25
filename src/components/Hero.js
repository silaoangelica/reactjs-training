import hero from "../assets/hero-image.jpg";

export default function Hero() {
  return (
    <div>
      <img src={hero} width="100%" />
      <div className="home-text">
        <h1>3D VIRTUAL FAIR AND EXPO PLATFORM</h1>
        <h3 className="home-paragraph">
          Experience 3D navigation on 360-degree views to full-on live seminars
          and one-on-one video interaction, enhanced with modern and futuristic
          design, turning your virtual event into a new dimension of reality!
        </h3>
      </div>
    </div>
  );
}
