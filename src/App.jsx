import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage/HomePage"
import AuthPage from "./pages/AuthPage/AuthPage"
import PageLayout from "./Layouts/PageLayout/PageLayout"
import Profilepage from "./pages/ProfilePage/Profilepage";

function App() {

  return (
    <PageLayout>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/auth" element={<AuthPage />}/>
        <Route path="/:username" element={<Profilepage/>}/>
      </Routes>
    </PageLayout>
  );
};

export default App
