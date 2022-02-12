import styled from "@emotion/styled";
import './App.css';
import Layout from "./ui/containers/Layout/Layout";

const AppDiv = styled.div`
width: 100%;
height: 100%;
`;

function App() {
  return (
    <AppDiv>
      <Layout />
    </AppDiv>
  );
}

export default App;
