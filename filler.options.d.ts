/**
 * @typedef { import('../../core/core.scale.js').default } Scale
 * @typedef { import('../../elements/element.line.js').default } LineElement
 * @typedef { import('../../types/index.js').FillTarget } FillTarget
 * @typedef { import('../../types/index.js').ComplexFillTarget } ComplexFillTarget
 */
export function _resolveTarget(sources: any, index: any, propagate: any): any;
/**
 * @param {LineElement} line
 * @param {number} index
 * @param {number} count
 */
export function _decodeFill(line: LineElement, index: number, count: number): any;
/**
 * @param {FillTarget | ComplexFillTarget} fill
 * @param {Scale} scale
 * @returns {number | null}
 */
export function _getTargetPixel(fill: FillTarget | ComplexFillTarget, scale: Scale): number | null;
/**
 * @param {FillTarget | ComplexFillTarget} fill
 * @param {Scale} scale
 * @param {number} startValue
 * @returns {number | undefined}
 */
export function _getTargetValue(fill: FillTarget | ComplexFillTarget, scale: Scale, startValue: number): number | undefined;
export type Scale =typeof import('core.scale.js');
export type LineElement =typeof import('element.line.js');
export type FillTarget = import('index.js').FillTarget;
export type ComplexFillTarget = import('index.js').ComplexFillTarget;
