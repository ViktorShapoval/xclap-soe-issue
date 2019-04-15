const xclap = require('xclap');
xclap.stopOnError = 'soft';

const tasks = {
    async1: 'node ./async1.js',
    async2: 'node ./async2.js',

    run: xclap.concurrent(['async1', 'async2'])
};

xclap.load(tasks);
