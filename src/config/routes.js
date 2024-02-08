const routes = {
  home: "/",
  following: "/following",
  // https://github.com/remix-run/react-router/issues/9779 --> you cannot use /@:nickname anymore (also refer this: https://github.com/remix-run/react-router/issues/10608)
  profile: "/:nickname",
  upload: "/upload",
  search: "/search",
};

export default routes;
