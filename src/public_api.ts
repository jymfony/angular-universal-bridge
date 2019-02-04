import Http = require('./Injection/Http');
import Di = require('./Injection/DependencyInjection');

const { RESPONSE, REQUEST } = Http;
const { CONTAINER } = Di;

export { RESPONSE, REQUEST };
export { CONTAINER };
export * from './Service/ServerResponse';
export * from './Module/AngularUniversalBridgeModule';
