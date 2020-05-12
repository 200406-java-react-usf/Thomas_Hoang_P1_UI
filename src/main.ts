import { AppModule } from "./util/app-module.js";

export const API_URL = 'ThomasHoangP1-env-1.eba-hktpj2wz.us-east-2.elasticbeanstalk.com'

window.onload = () => {
    console.log('page loaded.');
    const app = new AppModule();
    app.components['login'].render();
}
