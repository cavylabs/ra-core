import { Sort } from '../types';
export interface SortProps {
    setSortField: (field: string) => void;
    setSortOrder: (order: string) => void;
    setSort: (sort: Sort) => void;
    sort: Sort;
}
export declare const defaultSort: {
    field: string;
    order: string;
};
declare var _default: (initialSort?: Sort) => SortProps;
export default _default;
