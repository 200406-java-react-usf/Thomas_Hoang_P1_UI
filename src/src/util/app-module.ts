import { Router } from "./router.js";
import { LoginComponent } from "../src/components/login-component.js";
import { Route } from "./route.js";
import { AuthService } from "../src/services/auth-service.js";
import { RegisterComponent } from "../src/components/register-component.js";
import { DashboardComponent } from "../src/components/dashboard-component.js";

// Poor-man's Dependency Injection
export class AppModule {

    components = {};
    services = {};

    constructor() {

        this.services['router'] = new Router();
        this.services['auth'] = new AuthService();

        this.components['login'] = new LoginComponent(this.services['auth'], this.services['router']);
        this.components['register'] = new RegisterComponent();
        this.components['dashboard'] = new DashboardComponent();

        let routes = [
            new Route('/login', this.components['login']),
            new Route('/register', this.components['register']),
            new Route('/dashboard', this.components['dashboard'])
        ];

        this.services['router'].addRoutes(routes);

    }
}