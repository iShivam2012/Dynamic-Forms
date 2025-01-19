import "./App.css";
import dataJson from "./FormSchema/FormSchema.json";
import DynamicForms from "./Components/Dynamic Forms";

function App() {
  return (
    <div>
      <h1>Dynamic Forms</h1>
      <DynamicForms data={dataJson} />
    </div>
  );
}

export default App;
