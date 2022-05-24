import AuthRoutes from "./auth.routes.js";
import UsersRoutes from "./users.routes.js";
import MoviesRoutes from "./movies.routes.js";

const Router = app => {
    app.use('/api/auth', AuthRoutes);
    app.use('/api/users', UsersRoutes);
    app.use('/api/movies', MoviesRoutes);

}

export default Router;
