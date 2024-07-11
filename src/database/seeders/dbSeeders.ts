import { appointmentsSeeders } from "./appointmentesSeeders";
import { rolesSeeders } from "./rolesSeeders"
import { servicesSeeders } from "./servicesSeeders";
import { usersSeeders } from "./usersSeeders";

(async () => {
    console.log('starting seeders...');
    await rolesSeeders()
    await usersSeeders()
    await servicesSeeders()
    await appointmentsSeeders()
    console.log('finish seeders')
})()