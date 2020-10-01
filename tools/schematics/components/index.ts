import { chain, externalSchematic, Rule } from '@angular-devkit/schematics';
import * as path from 'path';

interface ComponentSchema {
  name: string;
  kind: 'model' | 'builder';
}

export default function (schema: any): Rule {
  return chain([
    externalSchematic('@schematics/angular', 'module', {
      project: 'components',
      name: schema.name,
      style: 'scss',
    }),
    externalSchematic('@schematics/angular', 'component', {
      project: 'components',
      name: schema.name,
      style: 'scss',
      skipTests: true,
      export: true,
      module: schema.name,
    }),
    externalSchematic('@schematics/angular', 'service', {
      project: 'components',
      name: schema.name,
      path: 'modules/components/src/lib/' + schema.name,
      skipTests: true,
    }),
    externalSchematic('@schematics/angular', 'class', {
      project: 'components',
      name: 'public_api',
      path: 'modules/components/src/lib/' + schema.name,
      skipTests: true,
    }),
    externalSchematic('@schematics/angular', 'class', {
      project: 'components',
      name: schema.name,
      path: 'modules/components/src/lib/' + schema.name,
      skipTests: true,
      type: 'options',
    }),
  ]);
}
