import express = require('express');
import logger from './utils/logger';
import { TreeNode, DataTreeNode } from './types';

// Create a new express application instance
const app: express.Application = express();

app.get('/', function (req, res) {
    logger.log('aaaa');

    const a: TreeNode = {
        isChild: false,
    };

    const b: DataTreeNode = {
        isChild: false,
        data: null,
    };

    res.send('Hello World!!!');
});

app.listen(3000, function () {
    logger.log('Example app listening on port 3000!');
});
