import * as express from 'express';
import config from './config';

const app: any = express();

app.listen(config.port, function () {
    console.log('Example app listening on port 3000!');
    console.log('Server listening on %d', config.port);
});
