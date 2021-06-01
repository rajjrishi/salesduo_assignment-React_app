import './App.css';
import SideNav from './components/sidenav/SideNav'
import Header from './components/header/Header'
import GoalComparision from './components/body/GoalComparision'
import LineChart from "./components/body/LineChart"
import BarChart from './components/body/BarChart'
import Table from './components/body/Table'

function App() {
  const income=124563;
  const dIncome=6.5;
  const goalIncome=200000;
  return (
    <div className="App">
      <Header />
      <div className="app_main">
        <div className="app_sidenav"><SideNav /></div>
        <div className="app_body">
          <div className="app_wrap">
            <div className="app_upper_body"> 
              <div className="upper_body_left">
                <div className="upl_upper">
                  <GoalComparision x={income} dx={dIncome} goal={goalIncome} className="hhh"/>
                </div>
                <div className="upl_lower">
                  <BarChart x={94.2} dx={6.9}/>
                </div>
              </div>
              <div className="upper_body_right">
                <div className="upl_upper">
                  <LineChart/>
                </div>
              </div> 
            </div>
            <div className="app_lower_body">
              <Table/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
