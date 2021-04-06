interface FetchOptions {
  url: string;
  headers?: object;
  loadCallback?: (response: string) => void;
  syncInBrowser?: boolean;
}

export function fetchUrl({
  url,
  headers = {},
  loadCallback = () => {},
  syncInBrowser = false
}: FetchOptions) {
  if (!url) {
    throw new Error("'url' is undefined");
  }
  const fail = () => {
    throw new Error(`${url} fetch failed`);
  };

  const request = require("request");
  request({url, headers}, (error, response, body) => {
    if (error) {
      fail();
    }
    loadCallback(body);
  });
}
