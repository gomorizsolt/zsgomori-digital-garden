---
title: "Utility Method to Construct API Urls"
tags: ["javascript"]
---

```ts[getApiRoute.ts]
import qs from "qs";

const replacePlaceholders = ({ url, params }: { url: string; params?: Object }) => {
  if (!params) {
    return url;
  }

  return Object.entries(params).reduce(
    (result, [paramKey, paramValue]) => result.replace(`:${paramKey}`, paramValue),
    url
  );
};

const getApiRoute = ({
  url,
  params,
  query,
}: {
  url: string;
  params?: Object;
  query?: Object;
}) => {
  const newUrl = replacePlaceholders({ url, params });

  if (!query) {
    return newUrl;
  }

  return `${newUrl}?${qs.stringify(query)}`;
};

getApiRoute({
  url: '/user/:id',
  params: {
    id: 1,
  },
  query: {
    status: 'active'
  }
});

// => /user/1?status=active
```

## Inspiration

- [How to better organize end-points in your web app](https://javascript.plainenglish.io/how-to-better-organize-end-points-in-frontend-2cebd39b08c3)
