import {app} from "./server.js";
import {PORT} from "./src/config/env.config.js";

app.listen(PORT, () => console.log(`Listen on  localhost: ${PORT}`));
