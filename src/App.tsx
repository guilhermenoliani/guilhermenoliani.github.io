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
      <C.ContainerMain>
        <img className="logo" src={logo} alt="" width={300} />
        <h1>EM BREVE</h1>
        <C.Icons>
          <img
            onClick={linked}
            src={linkedin}
            alt="Icone do LinkedIn Guilherme Oliani"
          />
          <img
            onClick={insta}
            src={instagram}
            alt="Icone do Instagram Guilherme Oliani"
          />
          <img
            onClick={git}
            src={gitHub}
            alt="Icone do GitHub Guilherme Oliani"
          />
        </C.Icons>
      </C.ContainerMain>
    </C.Maintenance>
  );
};

export default App;
