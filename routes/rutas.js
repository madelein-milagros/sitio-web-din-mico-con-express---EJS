const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('pages/index', { title: 'Inicio' });
});

router.get('/nosotros', (req, res) => {
    res.render('pages/nosotros', { title: 'Nosotros' });
});

router.get('/contacto', (req, res) => {
    res.render('pages/contacto', { title: 'Contacto' });
});

module.exports = router;