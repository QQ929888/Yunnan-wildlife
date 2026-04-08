/**
 * @typedef { import('./core.controller.js').default } Chart
 * @typedef {{value:number | string, label?:string, major?:boolean, $context?:any}} Tick
 */
/**
 * Returns a subset of ticks to be plotted to avoid overlapping labels.
 * @param {import('./core.scale.js').default} scale
 * @param {Tick[]} ticks
 * @return {Tick[]}
 * @private
 */
export function autoSkip(scale:typeof import('./core.scale.js'), ticks: Tick[]): Tick[];
export type Chart =typeof import('./core.controller.js');
export type Tick = {
    value: number | string;
    label?: string;
    major?: boolean;
    $context?: any;
};
