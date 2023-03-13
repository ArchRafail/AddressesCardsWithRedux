import './App.css';
import {Box} from "@mui/material";
import {Outlet} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Box>
        <Outlet/>
      </Box>
    </div>
  );
}

export default App;
