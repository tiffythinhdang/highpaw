import React from 'react';
import '../../stylesheets/about_page.scss';
import linkednInIcon from '../../assets/medium_icon_linkedin.png';
import githubIcon from '../../assets/medium_icon_github.png';
import portfolioIcon from '../../assets/medium_icon_portfolio.png';
import tiffanyIMG from '../../assets/developers/tiffany_dang.jpg';
import aaronIMG from '../../assets/developers/aaron_arima.jpg';
import jasonIMG from '../../assets/developers/jason_liao.jpg';
import brianIMG from '../../assets/developers/brian_cho.jpg';

class AboutPage extends React.Component {
  render() {
    return (
      <div className="about-page-container">
        <p className="app-description"><span className="in-line bold">highpaw</span> is a lightweight mobile application that allows users to interact with dog walkers and pet their dogs in the neighborhood.</p>

        <h1 className="form main header">Developers</h1>

        <div className="developers-outer-container">
          <div className="developer container">
            <div className="profile-photo container developer-img">
              <img src={aaronIMG} alt="aaron-img" />
            </div>

            <div className="developer-infor">
              <div className="developer-name">
                <p>Aaron Arima</p>
              </div>

              <div className="developer-professional-links">
                <a
                  href="https://www.linkedin.com/in/aaron-arima-3603816b"
                  target="_blank">
                  <img className="icon" src={linkednInIcon} alt="linkedin-icon" />
                </a>
                <a
                  href="https://github.com/aaarima"
                  target="_blank">
                  <img className="icon" src={githubIcon} alt="github-icon" />
                </a>
                {/* <a
                  href=""
                  target="_blank">
                  <img className="icon" src={portfolioIcon} alt="contact-icon" />
                </a> */}
              </div>
            </div>
          </div>

          <div className="developer container">
            <div className="profile-photo container developer-img">
              <img src={brianIMG} alt="brian-img" />
            </div>

            <div className="developer-infor">
              <div className="developer-name">
                <p>Brian Cho</p>
              </div>

              <div className="developer-professional-links">
                <a
                  href="https://www.linkedin.com/in/brian-cho-55a91a167"
                  target="_blank">
                  <img className="icon" src={linkednInIcon} alt="linkedin-icon" />
                </a>
                <a
                  href="https://github.com/BrianCho91"
                  target="_blank">
                  <img className="icon" src={githubIcon} alt="github-icon" />
                </a>
                <a
                  href="https://www.briancho.me"
                  target="_blank">
                  <img className="icon" src={portfolioIcon} alt="contact-icon" />
                </a>
              </div>
            </div>
          </div>

          <div className="developer container">
            <div className="profile-photo container developer-img">
              <img src={tiffanyIMG} alt="tiffany-img" />
            </div>

            <div className="developer-infor">
              <div className="developer-name">
                <p>Tiffany Dang</p>
              </div>

              <div className="developer-professional-links">
                <a
                  href="https://www.linkedin.com/in/tiffany-thinh-dang-8bb07562/"
                  target="_blank">
                  <img className="icon" src={linkednInIcon} alt="linkedin-icon" />
                </a>
                <a
                  href="https://github.com/tiffythinhdang"
                  target="_blank">
                  <img className="icon" src={githubIcon} alt="github-icon" />
                </a>
                <a
                  href="https://tiffanytdang.com/"
                  target="_blank">
                  <img className="icon" src={portfolioIcon} alt="contact-icon" />
                </a>
              </div>
            </div>
          </div>

          <div className="developer container">
            <div className="profile-photo container developer-img">
              <img src={jasonIMG} alt="jason-img" />
            </div>

            <div className="developer-infor">
              <div className="developer-name">
                <p>Jason Liao</p>
              </div>

              <div className="developer-professional-links">
                <a
                  href="https://www.linkedin.com/in/jliao1228/"
                  target="_blank">
                  <img className="icon" src={linkednInIcon} alt="linkedin-icon" />
                </a>
                <a
                  href="https://github.com/jasonliao122895"
                  target="_blank">
                  <img className="icon" src={githubIcon} alt="github-icon" />
                </a>
                <a
                  href="https://www.jliao.me/"
                  target="_blank">
                  <img className="icon" src={portfolioIcon} alt="contact-icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AboutPage;