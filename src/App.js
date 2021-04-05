
import './App.css';
import ReactFullpage from '@fullpage/react-fullpage';
import Button from '@material-ui/core/Button';

function App() {
  return (
    <ReactFullpage
      licenseKey={null}
      scrollingSpeed = {1000}
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <div className="section">
              <div style={{display: 'flex', flexDirection: 'column', width: '400px', margin: 'auto', textAlign: 'center'}}>
                <div>  
                  <h1>Web Guild</h1>
                  <h3>Creating an expanding input box.</h3>
                </div>
                <div style={{height:'40px'}}/>
                <Button 
                  style={{width: '100px', margin: 'auto'}}
                  variant="contained"
                  color="primary"
                  onClick={() => fullpageApi.moveSectionDown()}
                >
                  Next
                </Button>
              </div>
            </div>
            <div className="section">
              <p>Isn't this really easy?</p>
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
  />
  );
}

export default App;
