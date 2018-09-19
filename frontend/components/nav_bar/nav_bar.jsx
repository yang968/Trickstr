import React from 'react';
import { Link } from 'react-router-dom';

const BACKGROUND_LINKS = [
  // "https://78.media.tumblr.com/186285a97bbb35764c26064d07841a9e/tumblr_p6xk6hmnqJ1vboqg5o1_1280.jpg",
  // "https://78.media.tumblr.com/1a85fc10688cdb8309127ab2089ee759/tumblr_pcfbl4EfbS1qb8u8to4_1280.jpg",
  // "https://78.media.tumblr.com/fc3023cdff64a923ca80f39184b9d0fe/tumblr_ojswknY5MN1sp19abo1_1280.jpg",
  "https://78.media.tumblr.com/7ce92066ecdbf5678d9384efdd50af76/tumblr_pbsyb6zj061qa9abso1_1280.png",
  "https://78.media.tumblr.com/8439c022fff07035def8b43386945035/tumblr_pc16h9vqAp1v2z03bo1_1280.png",
  "https://78.media.tumblr.com/6468e1ca7f38bc8f516a6b503bf3da27/tumblr_pceavd89bf1r8wa9zo1_1280.jpg",
  "https://78.media.tumblr.com/9ec461c4baf2fb921190138db7bdc1a4/tumblr_p5fd5105dp1tuebjjo1_1280.jpg",
  "https://78.media.tumblr.com/e02a322da0d0cb05133b870ce1e759f1/tumblr_pccae8rkGP1uxf2ypo1_1280.png",
  "https://78.media.tumblr.com/020058af3a9505e2d29c013a096c4c01/tumblr_pauojoE3rK1r63k9io2_500.jpg",
  "https://78.media.tumblr.com/04d898ca08641c11371d8ca6ae6411b3/tumblr_p6y8w6C2NZ1w57efjo1_540.png",
  "https://78.media.tumblr.com/520ea28732a02fc4e70074f4ba3d2ec9/tumblr_pbyy32H8DL1s0r4q3o1_1280.jpg",
  "https://78.media.tumblr.com/0963b5b12adf8d429dbefa0adea91443/tumblr_p392n8vLho1ts562ko1_1280.jpg",
  "https://78.media.tumblr.com/92a66d9f8daedcae5ece325a958cad3b/tumblr_pcdus9T4jT1ue6lhao1_r1_400.gif",
  "https://78.media.tumblr.com/b60e2166e293083530523382659cef5a/tumblr_p6kqsbtpCn1wog8fro1_1280.gif",
  "https://78.media.tumblr.com/6a9b28fe66ba47b30a71f0a9028c8f88/tumblr_pceh6tuXRZ1v4tsaso1_1280.png",
  "https://78.media.tumblr.com/276722b1a9cb49d932dc0e582b485237/tumblr_pcc920edbr1s6l5kxo1_r1_1280.png",
  "https://78.media.tumblr.com/f159698b57f537bb9927c779d68d501b/tumblr_p7rokkPf0G1wjfr83o1_1280.png",
  "https://78.media.tumblr.com/59ade930fc903b52e58ba892c296f3b0/tumblr_oogoemb7k71usobm2o1_1280.jpg",
  "https://78.media.tumblr.com/e8d313af0f703e1ac80b2778dcb8cfd8/tumblr_pdskdmpSri1wu5dlzo2_540.jpg"
]

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rightButton: null,
      tabBar: null,
      style: {}
    }

    this.setStyle = this.setStyle.bind(this);
    this.logout = this.logout.bind(this);
    this.getRandomIndex = this.getRandomIndex.bind(this);
    let bgDiv = document.getElementById('bgDiv');
  }

  setStyle(page) {
    switch (page) {
      case "/":
        bgDiv.setAttribute("style", `background-image: url(${BACKGROUND_LINKS[this.getRandomIndex()]})`);
        break;
      case "signup":
        this.setState({ rightButton: <Link className="signup-button animated fadeIn" to="/login">Log In</Link>,
            style: { borderBottom: '0px', backgroundColor: 'rgba(0,0,0,0)' }
          });
        break;
      case "signin":
        bgDiv.setAttribute("style", `background-image: url(${BACKGROUND_LINKS[this.getRandomIndex()]})`);
        this.setState({ rightButton: <Link className="signin-button animated fadeIn" to="/">Sign Up</Link>,
            style: { borderBottom: '0px', backgroundColor: 'rgba(0,0,0,0)' }
          });
        break;
      case "main":
        bgDiv.setAttribute("style", `background: ""`);
        this.setState({ rightButton: <button className="main-button animated fadeIn" onClick={this.logout}>Log out</button>,
            tabBar: (
              <button onClick={() => window.location.reload()} className="nav-icon">
                <i className="side-icon">&#xea4c;</i>
              </button>),
            style: { borderBottom: '1px solid #515e71', backgroundColor: '#37465c', zIndex: "200" }
          })
        break;
      default:
        null;
    }
  }

  getRandomIndex() {
    return Math.floor(Math.random() * BACKGROUND_LINKS.length);
  }

  logout(){
    bgDiv.classList.add("background");
    this.props.logout();
  }

  componentDidMount() {
    this.setStyle(this.props.page);
  }

  componentWillReceiveProps(nextProps) {
    this.setStyle(nextProps.page);
  }

  render() {
    return (
      <nav style={this.state.style} className="nav-bar">
        <div className="logo-container">
          <img onClick={() => window.location.reload()} className="logo" src={window.images.whiteLogo}></img>
        </div>
        <div className="nav-div">
          <div className="middle">
            <div className="search-div">
              <div className="search-icon">&#xea99;</div>
              <input className="search" type="text" placeholder="Search Trickstr (Not Implemented)" />
            </div>
          </div>
          <div className="right-nav" >
            <div className="nav-icons">
              <div className="tabBar">
                <a target="_blank" href="https://github.com/yang968/Trickstr/" className="nav-icon">
                  <i className="fa fa-github side-icon" aria-hidden="true"></i>
                </a>
                <a target="_blank" href="https://www.linkedin.com/in/yang53" className="nav-icon">
                  <i className="fa fa-linkedin-square side-icon" aria-hidden="true"></i>
                </a>
                {this.state.tabBar}
              </div>
            </div>
            {this.state.rightButton}
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
