
import './App.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScooterList from './components/ScooterList';
import Button from 'react-bootstrap/Button';


const API_URL = process.env.REACT_APP_API

function App() {

  const [scooters, setScooters] = useState([]);
  const [useQueryParam, setUseQueryParam] = useState(false);

  const {id} = useParams();

  const currentScooter = scooters.find((scooter) => scooter.id === id);

  const [selectedScooter, setSelectedScooter] = useState(currentScooter);

  // useEffect(() => {fetchScooters()}, []);

  useEffect(() => {
    fetchScooters();
  }, [useQueryParam]); 

  const fetchScooters = () => {
    let apiUrl = `${API_URL}/scooters`
    if (useQueryParam) {
      apiUrl += '?status=available'; // Replace 'param=value' with your actual query parameter
    }
    axios.get(`${apiUrl}`)
    .then((response) => {
      console.log("getting scooters")
      setScooters(response.data);
    })
    .catch((error) => {
      console.error('Error fetching scooters', error);
    });
  };
  console.log(scooters)

  const toggleQueryParam = () => {
    setUseQueryParam(prevState => !prevState);
  };

  const handleScooterClick = (id) => {
    axios.get(`${API_URL}/scooters/${id}`)
    .then((response) => {
      console.log('Fetching scooter')
      setSelectedScooter(response.data);
    })
    .catch((error) => {
      console.error('Error fetching Scooter', error)
    });
  };




  return (
    <Router>
      <Navbar bg="light" data-bs-theme='light'>
        <Container className='nav'>
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              {/* <Nav.Link href="/">Scooters</Nav.Link> */}
              <Nav.Link href="/">Scooters</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container fluid className="main-container">
      <button onClick={toggleQueryParam}>
        {useQueryParam ? 'All Scooters' : 'Available Scooters'}
      </button>
      <Button onClick={fetchScooters}> Get Scooters</Button>
        <Row className="flex-grow-1">
          <Col>
            <Routes>
              {/* <Route path="/" element={<SurfMap surfLocations={surfLocations} />} /> */}
              <Route
                path="/"
                element={<ScooterList scooters={scooters} onScooterClick={handleScooterClick} />}
              />

              {/* <Route path="/locations/add" element={<AddSurfLocation onSubmit={fetchSurfLocations} />} /> */}
              {/* <Route
                path="/locations/:id"
                element={<SurfLocationDetails surfLocations={surfLocations} selectedSurfLocation={selectedSurfLocation} handleDeleteNote={handleDeleteNote} />}
              /> */}
              <Route
              path="/"
              />
            </Routes>
          </Col>
        </Row>
      </Container>
    </Router>
  );
}

export default App;
