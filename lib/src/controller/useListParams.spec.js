var useListParams_1 = require('./useListParams');
var queryReducer_1 = require('../reducer/admin/resource/list/queryReducer');
describe('useListParams', function () {
    describe('getQuery', function () {
        it('Returns the values from the location first', function () {
            var query = useListParams_1.getQuery({
                location: {
                    search: "?page=3&perPage=15&sort=name&order=ASC&filter=" + JSON.stringify({ name: 'marmelab' })
                },
                params: {
                    page: 1,
                    perPage: 10,
                    sort: 'city',
                    order: queryReducer_1.SORT_DESC,
                    filter: {
                        city: 'Dijon'
                    }
                },
                filterDefaultValues: {},
                perPage: 50,
                sort: {
                    field: 'company',
                    order: queryReducer_1.SORT_DESC
                }
            });
            expect(query).toEqual({
                page: 3,
                perPage: 15,
                sort: 'name',
                order: queryReducer_1.SORT_ASC,
                filter: {
                    name: 'marmelab'
                }
            });
        });
        it('Extends the values from the location with those from the props', function () {
            var query = useListParams_1.getQuery({
                location: {
                    search: "?filter=" + JSON.stringify({ name: 'marmelab' })
                },
                params: {
                    page: 1,
                    perPage: 10,
                    sort: 'city',
                    order: queryReducer_1.SORT_DESC,
                    filter: {
                        city: 'Dijon'
                    }
                },
                filterDefaultValues: {},
                perPage: 50,
                sort: {
                    field: 'company',
                    order: queryReducer_1.SORT_DESC
                }
            });
            expect(query).toEqual({
                page: 1,
                perPage: 50,
                sort: 'company',
                order: queryReducer_1.SORT_DESC,
                filter: {
                    name: 'marmelab'
                }
            });
        });
        it('Sets the values from the redux store if location does not have them', function () {
            var query = useListParams_1.getQuery({
                location: {
                    search: ""
                },
                params: {
                    page: 2,
                    perPage: 10,
                    sort: 'city',
                    order: queryReducer_1.SORT_DESC,
                    filter: {
                        city: 'Dijon'
                    }
                },
                filterDefaultValues: {},
                perPage: 50,
                sort: {
                    field: 'company',
                    order: queryReducer_1.SORT_DESC
                }
            });
            expect(query).toEqual({
                page: 2,
                perPage: 10,
                sort: 'city',
                order: queryReducer_1.SORT_DESC,
                filter: {
                    city: 'Dijon'
                }
            });
        });
        it('Extends the values from the redux store with those from the props', function () {
            var query = useListParams_1.getQuery({
                location: {
                    search: ""
                },
                params: {
                    page: 2,
                    sort: 'city',
                    order: queryReducer_1.SORT_DESC,
                    filter: {
                        city: 'Dijon'
                    }
                },
                filterDefaultValues: {},
                perPage: 50,
                sort: {
                    field: 'company',
                    order: queryReducer_1.SORT_DESC
                }
            });
            expect(query).toEqual({
                page: 2,
                perPage: 50,
                sort: 'city',
                order: queryReducer_1.SORT_DESC,
                filter: {
                    city: 'Dijon'
                }
            });
        });
        it('Uses the filterDefaultValues if neither the location or the redux store have them', function () {
            var query = useListParams_1.getQuery({
                location: {
                    search: ""
                },
                params: {},
                filterDefaultValues: { city: 'Nancy' },
                perPage: 50,
                sort: {
                    field: 'company',
                    order: queryReducer_1.SORT_DESC
                }
            });
            expect(query).toEqual({
                page: 1,
                perPage: 50,
                sort: 'company',
                order: queryReducer_1.SORT_DESC,
                filter: {
                    city: 'Nancy'
                }
            });
        });
    });
});
