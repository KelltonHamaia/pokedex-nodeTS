import {Router, Request, Response} from 'express';
import * as pageController from '../controller/pagesController';

const router = Router();

router.get('/', pageController.home);
router.get('/johto', pageController.johto);
router.get('/kanto', pageController.kanto);
router.get('/hoenn', pageController.hoenn);
router.get('/sinnoh', pageController.sinnoh);

export default router;