/**
 * @param {{ chart: Chart; scale: Scale; index: number; line: LineElement; }} source
 * @return {LineElement}
 */
export function _buildStackLine(source: {
    chart: Chart;
    scale: Scale;
    index: number;
    line: LineElement;
}): LineElement;
export type Chart =typeof import('core.controller.js');
export type Scale =typeof import('core.scale.js');
export type PointElement =typeof import('element.point.js');
import { LineElement } from "index.js";
