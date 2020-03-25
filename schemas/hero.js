export default {
    title: "Imágenes de Portada",
    name: "heroImages",
    type: "document",
    // fieldsets: [
    //     {}
    // ],
    fields: [
        {
            title: "Título",
            name: "title",
            type: "string",
            hidden: true,
            // options: {
            //     list: ['Imagenes']
            // }
        },
        {
            title: "Portada Móbil",
            name: "mobileHero",
            type: "image",
            description: "Tamaño recomendado: 1200x1800px"
        },
        {
            title: "Portada Tablet",
            name: "tabletHero",
            type: "image",
            description: "Tamaño recomendado: 1900x1800px"
        },
        {
            title: "Portada Escritorio",
            name: "DesktopHero",
            type: "image",
            description: "Tamaño recomendado: 1900x1000px"
        },
    ]
}