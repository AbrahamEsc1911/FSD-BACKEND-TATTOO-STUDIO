import { rolesSeeders } from "./rolesSeeders"
import { servicesSeeders } from "./servicesSeeders";
import { usersSeeders } from "./usersSeeders";

(async () => {
    console.log('starting seeders...');
    await rolesSeeders()
    await usersSeeders()
    await servicesSeeders()
    console.log('finish seeders')
})()