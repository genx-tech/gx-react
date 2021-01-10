const buildQuery = (data) =>
    data
        .entries()
        .map(
            ([k, v]) =>
                encodeURIComponent(k) +
                '=' +
                (v == null ? '' : encodeURIComponent(v))
        )
        .join('&');

export default buildQuery;
