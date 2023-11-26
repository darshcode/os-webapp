// COMP229-F2022-A2
// Ouzin von Wahl
// 301229915
// October 19, 2022

// Index Routes
import { Router } from 'express';
import { displayHomePage, displayAboutPage, displayContactPage, displayServicesPage, displayProjectsPage } from '../controllers/index.controller.server.js';

// Instantiating the router
const router = Router();

// Middleware to connect application
router.get('/', displayHomePage);
router.get('/home', displayHomePage);
router.get('/about', displayAboutPage);
router.get('/projects', displayProjectsPage);
router.get('/contact', displayContactPage);
router.get('/services', displayServicesPage);

export default router;