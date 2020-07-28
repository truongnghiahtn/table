import TrangChu from "./page/home/TrangChu/TrangChu";
import TrangDichvu from "./page/home/TrangDichVu/TrangDichVu";
import TrangBlog from "./page/home/TrangBlog/TrangBlog";
import TrangLienHe from "./page/home/TrangLienHe/TrangLienHe";
import TrangMauThietKe from "./page/home/TrangMauThietke/TrangMauThietKe";
import Dashboard from "./page/admin/Dashboard/Dashboard";
import Movie from "./page/admin/movie/movie";
import User from "./page/admin/user/user";




const routesHome = [
  {
    path: "/",
    exact: true,
    component: TrangChu
  },
  {
    path: "/Trangchu",
    exact: false,
    component: TrangChu
  },
  {
    path: "/Dich-vu",
    exact: false,
    component: TrangDichvu
  },
  {
    path: "/Blog",
    exact: false,
    component: TrangBlog
  },
  {
    path: "/Lien-he",
    exact: false,
    component: TrangLienHe
  },
  {
    path: "/Mau-thiet-ke",
    exact: false,
    component: TrangMauThietKe
  }
];

export { routesHome };

const routesAdmin = [
  {
    path: "/admin/dashboard",
    exact: false,
    component: Dashboard
  },
  {
    path: "/admin/movie",
    exact: false,
    component: Movie
  },
  {
    path: "/admin/user",
    exact: false,
    component: User
  }
];

export { routesAdmin };
