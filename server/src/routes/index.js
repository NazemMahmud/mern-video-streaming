import AuthRoutes from "./auth.routes.js";
import UsersRoutes from "./users.routes.js";

const Router = app => {
    app.use('/api/auth', AuthRoutes);
    app.use('/api/users', UsersRoutes);

}

export default Router;
