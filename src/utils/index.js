import _filter from 'lodash/filter';
import _reduce from 'lodash/reduce';

export const filterNull = (collection) => _filter(collection, (v) => v != null);

export const numOfNotNull = (collection) =>
    _reduce(
        collection,
        (num, v) => {
            if (v != null) num++;
            return num;
        },
        0
    );
