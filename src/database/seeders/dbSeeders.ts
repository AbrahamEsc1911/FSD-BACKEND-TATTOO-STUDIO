import { rolesSeeders } from "./rolesSeeders"
import { usersSeeders } from "./usersSeeders";

(async () => {
    console.log('starting seeders...');
    await rolesSeeders()
    await usersSeeders()
    console.log('finish seeders')
})()