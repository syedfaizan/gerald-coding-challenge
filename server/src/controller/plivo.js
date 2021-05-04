import config from "../config";

import plivo from "plivo";
let client = new plivo.Client(config.authId, config.token);
