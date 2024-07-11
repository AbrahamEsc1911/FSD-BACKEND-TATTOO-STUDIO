"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.servicesSeeders = void 0;
const db_1 = require("../db");
const Services_1 = require("../models/Services");
const servicesSeeders = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield db_1.AppDataSource.initialize();
        const services = [
            { name: 'Tatuajes personalizados', description: 'Los clientes tendrán la libertad de seleccionar motivos y diseños únicos, personalizando completamente su experiencia de tatuaje de acuerdo a sus preferencias y gustos.' },
            { name: 'Tatuajes del catálogo', description: 'Ofrecemos la realización de tatuajes basados en diseños predefinidos en nuestro catálogo. Los clientes pueden elegir entre una variedad de opciones estilizadas y probadas.' },
            { name: 'Restauración y rejuvenecimiento de trabajos', description: 'Nos especializamos en la restauración y rejuvenecimiento de tatuajes existentes. Nuestros expertos trabajan para mejorar y renovar tatuajes antiguos, devolviéndoles su vitalidad.' },
            { name: 'Colocación de piercings y dilatadores', description: 'Ofrecemos servicios profesionales para la colocación de piercings y dilatadores. Nuestro equipo garantiza procedimientos seguros y estilos variados para satisfacer las preferencias individualesde nuestros clientes.' },
            { name: 'Venta de piercings y otros artículos', description: 'Además de nuestros servicios de aplicación, ofrecemos una selección de piercings y otrosartículos relacionados con el arte corporal. Los clientes pueden adquirir productos de calidad paracomplementar su estilo único.' }
        ];
        const newServices = yield createServices(services);
        yield Services_1.Services.save(newServices);
        console.log('===========================');
        console.log('Services seeder successfully');
        console.log('===========================');
    }
    catch (error) {
        console.log('===========================');
        console.log('ERROR SERVICES SEEDER', error.message);
        console.log('===========================');
    }
    finally {
        yield db_1.AppDataSource.destroy();
    }
});
exports.servicesSeeders = servicesSeeders;
const createServices = (arr) => __awaiter(void 0, void 0, void 0, function* () {
    const newServices = [];
    arr.forEach((element) => {
        const service = new Services_1.Services();
        service.name = element.name;
        service.description = element.description;
        newServices.push(service);
    });
    return newServices;
});
