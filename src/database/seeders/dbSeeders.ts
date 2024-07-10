import { rolesSeeders } from "./rolesSeeders"

(async () => {
    console.log('starting seeders...');
    await rolesSeeders()
    console.log('finish seeders')
})()