const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const path = require('path');
const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Sirve los archivos estáticos desde la carpeta frontend
app.use(express.static(path.join(__dirname, '../frontend')));

// Configura el transportador de Nodemailer (usando Gmail)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'inigo.g.p@opendeusto.es', // Reemplaza con tu correo
    pass: 'clsl lmjp kczv wlje', // Usa una contraseña de aplicación
  },
});

// Ruta para enviar el parte
app.post('/enviar-parte', (req, res) => {
  const { email, tipoRotura } = req.body;

  if (!email || !tipoRotura) {
    return res.status(400).json({ error: 'Falta el correo o el tipo de rotura' });
  }

  let contenidoParte = '';
  switch (tipoRotura) {
    case 'roturaVitroceramica':
      contenidoParte = 'Reporte de incidencia: Rotura de vitrocerámica\n\n' +
                       'Hemos recibido tu reporte. Un técnico evaluará la vitrocerámica dañada y se pondrá en contacto contigo.';
      break;
    case 'roturaMampara':
      contenidoParte = 'Reporte de incidencia: Rotura de mampara\n\n' +
                       'Hemos recibido tu reporte. Un especialista revisará la mampara rota.';
      break;
    case 'roturaEspejo':
      contenidoParte = 'Reporte de incidencia: Rotura de espejo\n\n' +
                       'Hemos recibido tu reporte. Un profesional evaluará el espejo dañado.';
      break;
    case 'roturaCristal':
      contenidoParte = 'Reporte de incidencia: Rotura de cristal\n\n' +
                       'Hemos recibido tu reporte. Un técnico inspeccionará el cristal roto.';
      break;
    default:
      return res.status(400).json({ error: 'Tipo de rotura no válido' });
  }

  const mailOptions = {
    from: 'tu.correo@gmail.com',
    to: email,
    subject: `Parte de incidencia - ${tipoRotura}`,
    text: contenidoParte,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error al enviar el correo:', error);
      return res.status(500).json({ error: 'Error al enviar el correo' });
    }
    res.status(200).json({ message: 'Parte enviado correctamente' });
  });
});

// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}/bienvenido.html`);
});