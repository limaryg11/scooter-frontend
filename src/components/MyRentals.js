
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SurfLocationList from './components/SurfLocationList';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SurfLocationDetails from './components/SurfLocationDetails';
import AddSurfLocation from './components/AddSurfLocation';
import Footer from './components/Footer';
import SurfMap from './components/SurfMap';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const API_URL = process.env.REACT_APP_API
