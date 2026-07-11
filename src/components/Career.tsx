import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My Education <span>&</span>
          <br /> Achievements
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech Computer Science</h4>
                <h5>AKTU University</h5>
              </div>
              <h3>2023–2027</h3>
            </div>
            <p>
             • Academic Performance: Maintained a strong CGPA of 8.2 in the 1st year.
             • Core Focus: Deepening knowledge in Computer Science with an active interest in Cybersecurity foundations and Artificial Intelligence.
             • Learning & Growth: Exploring how AI can be leveraged for threat detection and building secure, efficient applications.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Achievements</h4>
                <h5>Competitive Coding & Projects</h5>
              </div>
              <h3>2023–Present</h3>
            </div>
            <p>
              • Solved 300+ problems on LeetCode<br/>
              • 500+ contributions on GitHub<br/>
              • Participated in Smart India Hackathon 2026<br/>
              • Active Open-Source Contributor<br/>
              • Secured Top 10 in College Coding Competition
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Certifications</h4>
                <h5>Technical & Security</h5>
              </div>
              <h3>2023–2024</h3>
            </div>
            <p>
              • Python Programming - Solearn<br/>
              • Java (Basic) - HackerRank<br/>
              • Cybersecurity Essentials - Cisco Networking Academy<br/>
              • Git & GitHub - IBM SkillsBuild<br/>
              • Web Development Bootcamp - Udemy<br/>
              • Linux Essentials - Cisco Networking Academy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
