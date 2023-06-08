const fs = require('fs');
const path = require('path');

console.log('executing preInstall.js \n');
console.log('process.cwd():', process.cwd(), '\n'); // YOU WANT THIS ONE!! PROCESS.CWD();
console.log('__dirname/../..', path.resolve(__dirname, '../..'));
console.log('__dirname:', __dirname, '\n');
console.log('path.resolve(__dirname, "/instrumentation.ts":', path.resolve(__dirname, './instrumentation.ts'), '\n');
console.log('path.resolve(process.cwd(), "/instrumentation.ts":', path.resolve(process.cwd(), './node_modules/nextview_tracer'));
console.log('************************');

// Copy instrumentation.ts:
fs.copyFileSync(path.join(__dirname, 'instrumentation.ts'), path.join(path.resolve(__dirname, '../..'), 'instrumentation.ts'));

// Copy instrumentation.node.ts:
fs.copyFileSync(path.join(__dirname, 'instrumentation.node.ts'), path.join(path.resolve(__dirname, '../..'), 'instrumentation.node.ts'));

// Copy docker-compose.yaml:
fs.copyFileSync(path.join(__dirname, 'docker-compose.yaml'), path.join(path.resolve(__dirname, '../..'), 'docker-compose.yaml'));

// Copy collector-gateway-config.yaml:
fs.copyFileSync(path.join(__dirname, 'collector-gateway-config.yaml'), path.join(path.resolve(__dirname, '../..'), 'collector-gateway-config.yaml'));

// Copy prometheus.yaml:
fs.copyFileSync(path.join(__dirname, 'prometheus.yaml'), path.join(path.resolve(__dirname, '../..'), 'prometheus.yaml'));



// fs.copyFile(__dirname + '/tracer.ts', process.cwd(), (err) => {
//   if(err) throw err;
//   console.log('File was copied to destination');
// });