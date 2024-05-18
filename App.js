import React from "react";
import Header from "./component/Header";
import SectionOne from "./component/sectionOne";
import SectionTwo from "./component/sectionTwo";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <main>
          <SectionOne/>
          <SectionTwo/>
        </main>
      </div>
    );
  }
}

export default App;
