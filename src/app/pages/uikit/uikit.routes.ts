import { Routes } from '@angular/router';
import { ButtonDemo } from './button-demo/button-demo';
import { ChartDemo } from './chart-demo/chart-demo';
import { FileDemo } from './file-demo/file-demo';
import { InputDemo } from './input-demo/input-demo';
import { ListDemo } from './list-demo/list-demo';
import { MediaDemo } from './media-demo/media-demo';
import { MenuDemo } from './menu-demo/menu-demo';
import { MessagesDemo } from './messages-demo/messages-demo';
import { MiscDemo } from './misc-demo/misc-demo';
import { OverlayDemo } from './overlay-demo/overlay-demo';
import { PanelsDemo } from './panels-demo/panels-demo';
import { TableDemo } from './table-demo/table-demo';
import { TimelineDemo } from './timeline-demo/timeline-demo';
import { TreeDemo } from './tree-demo/tree-demo';
import { FormlayoutDemo } from './formlayout-demo/formlayout-demo';


export default [
    { path: 'button', data: { breadcrumb: 'Button' }, component: ButtonDemo },
    { path: 'charts', data: { breadcrumb: 'Charts' }, component: ChartDemo },
    { path: 'file', data: { breadcrumb: 'File' }, component: FileDemo },
    { path: 'formlayout', data: { breadcrumb: 'Form Layout' }, component: FormlayoutDemo },
    { path: 'input', data: { breadcrumb: 'Input' }, component: InputDemo },
    { path: 'list', data: { breadcrumb: 'List' }, component: ListDemo },
    { path: 'media', data: { breadcrumb: 'Media' }, component: MediaDemo },
    { path: 'message', data: { breadcrumb: 'Message' }, component: MessagesDemo },
    { path: 'misc', data: { breadcrumb: 'Misc' }, component: MiscDemo },
    { path: 'panel', data: { breadcrumb: 'Panel' }, component: PanelsDemo },
    { path: 'timeline', data: { breadcrumb: 'Timeline' }, component: TimelineDemo },
    { path: 'table', data: { breadcrumb: 'Table' }, component: TableDemo },
    { path: 'overlay', data: { breadcrumb: 'Overlay' }, component: OverlayDemo },
    { path: 'tree', data: { breadcrumb: 'Tree' }, component: TreeDemo },
    { path: 'menu', data: { breadcrumb: 'Menu' }, component: MenuDemo },
    { path: '**', redirectTo: '/notfound' }
] as Routes;
