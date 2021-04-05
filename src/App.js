
import './App.css';
import ReactFullpage from '@fullpage/react-fullpage';

function App() {
  return (
    <ReactFullpage
    scrollingSpeed = {1000}
    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section">
            <p>Web Guild</p>
            <button onClick={() => fullpageApi.moveSectionDown()}>
              Next
            </button>
          </div>
          <div className="section">
            <p>Section 2</p>
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
  );
}

export default App;
