// Import Assets
import crowdnuru from "../assets/crowdnuru.png";
import ecsynths from "../assets/ecsynths.png";

const Projects = () => {
  return (
    <section className="projects">
      <h2>My Projects</h2>
      <div className="projects__cards">
        <div className="projects__card">
          <h3>Crowdnuru</h3>
          <img src={crowdnuru} alt="Crowdnuru" />
          <p>
            CrowdNuru is a decentralized Crowdfunding, Launchpad, Hiring and
            Collaboration Platform.
          </p>

          <a
            href="https://crowdnuru.netlify.app/"
            target="_blank "
            rel="noreferrer"
            className="button"
          >
            Site
          </a>
          <a
            href="https://github.com/devbxtzz/crowdnuru"
            target="_blank "
            rel="noreferrer"
            className="button"
          >
            Code
          </a>
        </div>

        <div className="projects__card">
          <h3>Ecsynths</h3>
          <img src= {ecsynths} alt="Ecsynths Landing Page" />
          <p>Ecsynths is a synthetic derivatives DEX</p>

          <a
            href="https://ecsynths.netlify.com/"
            target="_blank "
            rel="noreferrer"
            className="button"
          >
            Site
          </a>
          <a
            href="https://github.com/devbxtzz/ecsynthss"
            target="_blank "
            rel="noreferrer"
            className="button"
          >
            Code
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
