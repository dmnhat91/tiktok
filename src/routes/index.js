import routesConfig from "@/config/routes";

//Layouts
import { HeaderOnly } from "@/components/Layout";

import Home from "@/pages/Home";
import Following from "@/pages/Following";
import Profile from "@/pages/Profile";
import Upload from "@/pages/Upload";
import Search from "@/pages/Search";

// Public routes: still see without logging in
const publicRoutes = [
  { path: routesConfig.home, component: Home },
  { path: routesConfig.following, component: Following },
  { path: routesConfig.profile, component: Profile },
  { path: routesConfig.upload, component: Upload, layout: HeaderOnly },
  { path: routesConfig.search, component: Search, layout: null },
];

// Private routes: cannot see without login
const privateRoutes = [];

export { publicRoutes, privateRoutes };
