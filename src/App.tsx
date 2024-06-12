import { Home } from "./view/home";
import Repositories from "./view/repositories";
import Stars from "./view/stars";

function App() {
  let Page = Home;
  const { pathname } = window.location;

  if (pathname === "/repositories") {
    Page = Repositories;
  } else {
    Page = Stars;
  }

  return (
    <div>
      <Home />
      <div className="max-w-[80%] mx-auto">
        <Page />
      </div>
    </div>
  );
}

export default App;
