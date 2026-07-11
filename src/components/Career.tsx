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
                <h5>ABES Engineering College</h5>
              </div>
              <h3>2025–2029</h3>
            </div>
            <p>
              Pursuing Bachelor of Technology in Computer Science Engineering with CGPA 8.2 (1st Year).
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
              • Participated in Smart India Hackathon 2024<br/>
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
