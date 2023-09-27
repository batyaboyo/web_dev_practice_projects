// Import Assets
import profile from "../assets/profile.jpg";

const Header = () => {
  return (
    <section className="header">
      <img src={profile} alt="Batya Tonny" />

      <div className="header__content">
        <h1>Tonny Batya</h1>
        <p>Blockchain Developer</p>
        <a
          href="https://docs.google.com/document/d/1nItvDAPfn1h1dRJutvcLMuyq2HjHytdr/edit?usp=sharing&ouid=102523442983922998998&rtpof=true&sd=true"
          className="button"
          target="_blank "
          rel="noreferrer"
        >
          Resume
        </a>
      </div>
    </section>
  );
};

export default Header;
