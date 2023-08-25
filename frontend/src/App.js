// Import dependencies
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import Components, styles, media
import Navigation from './components/Navigation';
import './App.css';

// Import Pages
import JobsPage from './pages/JobPage';
import AddJobPageForm from './pages/AddJobPageForm';
import EditJobPageForm from './pages/EditJobPageForm';
import HomePage from './pages/HomePage';
import TopicsPage from './pages/TopicsPage';

// Define the function that renders the content in Routes, using State.
function App() {

  const [job, setJobToEdit] = useState([])

  return (
    <>
      <BrowserRouter>

          <header>
            <h1>Joel Henningsen's Portfolio</h1>
            <p>Full Stack MERN Website Demo</p>
          </header>

          <Navigation />

          <main>
            <section>
                <Routes> 
                    <Route path="/" element={<HomePage/>} />
                    <Route path="/topics" element={<TopicsPage/>} />
                    <Route path="/jobs" element={<JobsPage setJob={setJobToEdit}/>} />
                    <Route path="/create" element={<AddJobPageForm/>} /> 
                    <Route path="/update" element={<EditJobPageForm jobToEdit={job} />} />
                </Routes>
              </section>
          </main>

          <footer>
            <p>&copy; 2023 Joel Henningsen</p>
          </footer>

      </BrowserRouter>
    </>
  );
}

export default App;