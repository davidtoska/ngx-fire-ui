import * as shelljs from 'shelljs';

const clean = () => {
  shelljs.exec('rm -rf dist');
};

const publish = (project: string) => {
  shelljs.exec('npm run build:' + project);
  const distChange = shelljs.cd('dist');
  const modulesChange = shelljs.cd('modules');
  const projectChange = shelljs.cd(project);
  if (
    distChange.code !== 0 ||
    modulesChange.code !== 0 ||
    projectChange.code !== 0
  ) {
    throw new Error('Could not change directory');
  }
  shelljs.exec('npm publish --access=public');
  shelljs.cd('..');
  shelljs.cd('..');
  shelljs.cd('..');
};

const program = () => {
  clean();
  publish('core');
  publish('app-shell');
};

program();
