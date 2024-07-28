import { AppDataSource } from "../db"
import { Services } from "../models/Services"

export const servicesSeeders = async () => {
    try {

        await AppDataSource.initialize()

        const services = [
            { name: 'Tatuajes personalizados', description: 'Los clientes tendrán la libertad de seleccionar motivos y diseños únicos, personalizando completamente su experiencia de tatuaje de acuerdo a sus preferencias y gustos.', image: "./images/ser-1.svg"},
            { name: 'Tatuajes del catálogo', description: 'Ofrecemos la realización de tatuajes basados en diseños predefinidos en nuestro catálogo. Los clientes pueden elegir entre una variedad de opciones estilizadas y probadas.', image: "./images/ser-2.svg"  },
            { name: 'Restauración y rejuvenecimiento de trabajos', description: 'Nos especializamos en la restauración y rejuvenecimiento de tatuajes existentes. Nuestros expertos trabajan para mejorar y renovar tatuajes antiguos, devolviéndoles su vitalidad.', image: "./images/ser-3.svg" },
            { name: 'Colocación de piercings y dilatadores', description: 'Ofrecemos servicios profesionales para la colocación de piercings y dilatadores. Nuestro equipo garantiza procedimientos seguros y estilos variados para satisfacer las preferencias individualesde nuestros clientes.', image: "./images/ser-2.svg" },
            { name: 'Venta de piercings y otros artículos', description: 'Además de nuestros servicios de aplicación, ofrecemos una selección de piercings y otrosartículos relacionados con el arte corporal. Los clientes pueden adquirir productos de calidad paracomplementar su estilo único.', image: "./images/ser-3.svg" },
            { name: 'Tattoo Cover Up', description: 'Transformamos tatuajes antiguos o no deseados en nuevas obras de arte', image: "./images/ser-1.svg" },
            { name: 'Venta de piercings y otros artículos', description: 'Además de nuestros servicios de aplicación, ofrecemos una selección de piercings y otrosartículos relacionados con el arte corporal. Los clientes pueden adquirir productos de calidad paracomplementar su estilo único.', image: "./images/ser-2.svg" }
        ]

        const newServices = await createServices(services)

        await Services.save(newServices)

        console.log('===========================');
        console.log('Services seeder successfully');
        console.log('===========================');

    } catch (error: any) {

        console.log('===========================');
        console.log('ERROR SERVICES SEEDER', error.message);
        console.log('===========================');

    } finally {

        await AppDataSource.destroy()

    }
}

const createServices = async (arr: object[]) => {
    const newServices: Services[] = []

    arr.forEach((element: any) => {

        const service = new Services()
        service.name = element.name
        service.description = element.description
        service.image = element.image
        newServices.push(service)

    })

    return newServices
}