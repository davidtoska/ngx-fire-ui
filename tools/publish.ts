import * as shelljs from 'shelljs';
shelljs.exec('npm run build:app-shell');
shelljs.cd('dist');
shelljs.cd('modules');
shelljs.cd('app-shell');
shelljs.echo('Hello');
shelljs.exec('npm publish --access=public');
