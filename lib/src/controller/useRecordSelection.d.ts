/**
 * Get the list of selected items for a resource, and callbacks to change the selection
 *
 * @param resource The resource name, e.g. 'posts'
 *
 * @returns {Object} Destructure as [selectedIds, { select, toggle, clearSelection }].
 */
declare const useSelectItems: (resource: string) => [(string | number)[], {
    select: (newIds: (string | number)[]) => void;
    toggle: (id: string | number) => void;
    clearSelection: () => void;
}];
export default useSelectItems;
