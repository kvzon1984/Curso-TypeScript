import Group, { usuarios } from './modulos/Group'
import { Point } from './modulos/Point'

const group = new Group(1, 'Los Aguilas')

group.name = 'Los mejores'
console.log(group.name);

const point = new Point(10, 50)

group.name = 'Los mejores'
console.log(group.name);

console.log(point);

console.log(usuarios);

