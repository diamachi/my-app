import './App.css';
import CardComponent from "./components/card"
import { datas } from './data'

function App() {
  return (
    <div className="App">
      {/* {datas.map(data => (
        <CardComponent title={data.title} company={data.company} location={data.location} type={data.type} exp={data.experience} stipend={data.stipend} empNo={data.employees} logo={data.logo} />
      ))} */}
      <h1>Waddup My Brothers</h1>
      )
    </div>
  );
}

export default App;
