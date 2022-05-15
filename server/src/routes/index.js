import AuthRoutes from "./auth.routes.js";

const Router = app => {
    app.use('/api/auth', AuthRoutes);

}

export default Router;
