import { Reducer } from 'redux';
import { Identifier, ReduxState } from '../../../types';
export interface OneToManyState {
    [relatedTo: string]: {
        ids: Identifier[];
        total: number;
    };
}
declare const oneToManyReducer: Reducer<OneToManyState>;
export declare const getIds: (state: ReduxState, relatedTo: string) => (string | number)[];
export declare const getTotal: (state: ReduxState, relatedTo: string) => number;
export declare const getReferences: (state: ReduxState, reference: any, relatedTo: any) => {};
export declare const getReferencesByIds: (state: ReduxState, reference: string, ids: (string | number)[]) => {};
export declare const nameRelatedTo: (reference: string, id: string | number, resource: string, target: string, filter?: any) => string;
export default oneToManyReducer;
