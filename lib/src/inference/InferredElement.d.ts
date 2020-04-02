import { InferredType } from './types';
declare class InferredElement {
    private type;
    private props;
    private children;
    constructor(type?: InferredType, props?: any, children?: any);
    getElement(props?: {}): any;
}
export default InferredElement;
