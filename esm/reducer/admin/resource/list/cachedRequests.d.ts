import { Reducer } from 'redux';
import { Identifier } from '../../../../types';
interface CachedRequestState {
    ids: Identifier[];
    total: number;
    validity: Date;
}
interface State {
    [key: string]: CachedRequestState;
}
declare const cachedRequestsReducer: Reducer<State>;
export default cachedRequestsReducer;
