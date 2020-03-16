export default {
    title: "Trabajo",
    name: "trabajo",
    type: "document",
    // fieldsets: [
    //     {}
    // ],
    fields: [
        {
            title: "Nombre del Trabajo",
            name: "title",
            type: "string"
        },
        {
            title: "Categoría",
            name: "workType",
            type: "string"
        },
        {
            title: "Enlace",
            name: "slug",
            type: "slug"
        },
        {
            title: "Imagen Destacada",
            name: "featuredImage",
            type: "image"
        },
        {
            title: "Descripción",
            name: "description",
            type: "array",
            of: [
                {type: 'block'}
            ]
        },
        {
            title: "Contenido",
            name: "content",
            type: "array",
            of: [
                {type: 'block'},
                {type: 'image'}
            ]
        },
        {
            title: "Tipo de Cabecera",
            name: "headerType",
            type: "string",
            options: {
                list: [
                    {title: "Blanco", value: "color-white"},
                    {title: "Negro", value: "color-black"},
                    {title: "Rosa", value: "color-rose"}
            ],
            layout: "select"
        }
        }
    ]
}