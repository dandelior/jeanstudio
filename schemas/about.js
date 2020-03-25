export default {
    title: "Sobre mi",
    name: "about",
    type: "document",
    // fieldsets: [
    //     {}
    // ],
    fields: [
        {
            title: "Título",
            name: "title",
            type: "string",
            hidden: true
        },
        {
            title: "Imagen de Presentación",
            name: "presentationImage",
            type: "image"
        },
        {
            title: "Bio",
            name: "bio",
            type: "array",
            of: [
                {type: 'block'}
            ]
        },
        {
            title: "Experiencia",
            name: "experiencia",
            type: "array",
            of: [
                {type: 'block'}
            ]
        },
        {
            title: "¿Qué Hago?",
            name: "quehago",
            type: "array",
            of: [
                {type: 'block'}
            ]
        }
    ]
}