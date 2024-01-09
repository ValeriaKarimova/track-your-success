import './App.css'
import EditPage from './pages/Edit'
import HomePage from './pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewPage from './pages/New';
import { Layout } from './pages/Layout';

function App() {


  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />}/>
        <Route path="edit" element={<EditPage />} />
        <Route path="new" element={<NewPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
