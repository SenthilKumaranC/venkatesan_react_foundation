import "./App.css";
import Age from "./components/Age/Age";
import Form from "./components/Form/Form";
import UseMemo from "./components/UseMemo/UseMemo";
import UseMemo2 from "./components/UseMemo/UseMemo2";

function App() {
  return (
    <div style={{display:"flex",flexDirection:"column",width:"200px"}}>
      {/* <Age></Age>
      <UseMemo></UseMemo>
      <UseMemo2></UseMemo2> */}
      <Form></Form>
    </div>
  );
}

export default App;
