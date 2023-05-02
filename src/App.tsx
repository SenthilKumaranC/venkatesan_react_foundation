import "./App.css";
import Age from "./components/Age/Age";
import Form from "./components/Form/Form";

function App() {
  return (
    <div style={{display:"flex",flexDirection:"column",width:"200px"}}>
       <Age></Age>
      {/*<UseMemo></UseMemo>
      <UseMemo2></UseMemo2> */}
      <Form></Form>
    </div>
  );
}

export default App;
