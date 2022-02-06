const {check} = require('express-validator')

const validate = [
    check('name')
    .notEmpty().withMessage('Nombre requerido'),
    check('email')
    .notEmpty().withMessage('Email requerido').bail()
    .isEmail().withMessage('Debe ingresar un e-mail válido'),
    check('color')
    .notEmpty().withMessage('Color de preferencia requerido'),
    check('edad')
    .isInt().withMessage('La edad debe ser un número')
]

module.exports = validate