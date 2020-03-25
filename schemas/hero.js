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
            type: "image"
        },
        {
            title: "Portada Tablet",
            name: "tabletHero",
            type: "image"
        },
        {
            title: "Portada Escritorio",
            name: "DesktopHero",
            type: "image"
        },
    ]
}