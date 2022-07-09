import * as C from "./AppStyle";
import logo from "./assets/logo.svg";
import linkedin from "./assets/linkedin.svg";
import instagram from "./assets/instagram.svg";
import gitHub from "./assets/github.svg";
const App = () => {
  const linked = () => {
    window.open("https://www.linkedin.com/in/guilhermeoliani/");
  };

  const insta = () => {
    window.open("https://www.instagram.com/oliani.dev/");
  };

  const git = () => {
    window.open("https://github.com/guilhermenoliani");
  };

  return (
    <C.Maintenance>
      <img src={logo} alt="" />
      <h1>EM BREVE</h1>
      <div className="icons">
        <img onClick={linked} src={linkedin} alt="" />
        <img onClick={insta} src={instagram} alt="" />
        <img onClick={git} src={gitHub} alt="" />
      </div>
    </C.Maintenance>
  );
};

export default App;
