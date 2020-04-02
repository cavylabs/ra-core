import { Sort, Record, Pagination } from '../../types';
declare const defaultReferenceSource: (resource: string, source: string) => string;
export interface ReferenceInputValue {
    choices: Record[];
    error?: string;
    loading: boolean;
    pagination: Pagination;
    setFilter: (filter: string) => void;
    filter: any;
    setPagination: (pagination: Pagination) => void;
    setSort: (sort: Sort) => void;
    sort: Sort;
    warning?: string;
}
interface Option {
    allowEmpty?: boolean;
    filter?: any;
    filterToQuery?: (filter: string) => any;
    input?: any;
    perPage?: number;
    record?: Record;
    reference: string;
    referenceSource?: typeof defaultReferenceSource;
    resource: string;
    sort?: Sort;
    source: string;
}
/**
 * A hook for choosing a reference record. Useful for foreign keys.
 *
 * This hook fetches the possible values in the reference resource
 * (using `dataProvider.getMatching()`), it returns the possible choices
 * as the `choices` attribute.
 *
 * @example
 * const {
 *      choices, // the available reference resource
 * } = useReferenceInputController({
 *      input, // the input props
 *      resource: 'comments',
 *      reference: 'posts',
 *      source: 'post_id',
 * });
 *
 * The hook also allow to filter results. It returns a `setFilter`
 * function. It uses the value to create a filter
 * for the query - by default { q: [searchText] }. You can customize the mapping
 * searchText => searchQuery by setting a custom `filterToQuery` function option
 * You can also add a permanentFilter to further filter the result:
 *
 * @example
 * const {
 *      choices, // the available reference resource
 *      setFilter,
 * } = useReferenceInputController({
 *      input, // the input props
 *      resource: 'comments',
 *      reference: 'posts',
 *      source: 'post_id',
 *      permanentFilter: {
 *          author: 'john'
 *      },
 *      filterToQuery: searchText => ({ title: searchText })
 * });
 */
declare const useReferenceInputController: ({ input, perPage, filter, reference, filterToQuery, referenceSource, resource, sort: sortOverride, source, }: Option) => ReferenceInputValue;
export default useReferenceInputController;
