require('dotenv').config();
// Separar o servidor das configurações do app

import { app } from "./app";

app.listen(process.env.PORT || '3001')

