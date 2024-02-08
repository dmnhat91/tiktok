//Layouts
import { HeaderOnly } from "@/components/Layout";

import Home from "@/pages/Home";
import Following from "@/pages/Following";
import Profile from "@/pages/Profile";
import Upload from "@/pages/Upload";
import Search from "@/pages/Search";

// Public routes: still see without logging in
const publicRoutes = [
  { path: "/", component: Home },
  { path: "/following", component: Following },
  // https://github.com/remix-run/react-router/issues/9779 --> you cannot use /@:nickname anymore (also refer this: https://github.com/remix-run/react-router/issues/10608)
  { path: "/:nickname", component: Profile },
  { path: "/upload", component: Upload, layout: HeaderOnly },
  { path: "/search", component: Search, layout: null },
];

// Private routes: cannot see without login
const privateRoutes = [];

export { publicRoutes, privateRoutes };
