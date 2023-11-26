import Home from "@/pages/Home";
import Following from "@/pages/Following";
import Profile from "@/pages/Profile";

// Public routes: still see without logging in
const publicRoutes = [
  { path: "/", component: Home },
  { path: "/following", component: Following },
  { path: "/profile", component: Profile },
];

// Private routes: cannot see without login
const privateRoutes = [];

export { publicRoutes, privateRoutes };
