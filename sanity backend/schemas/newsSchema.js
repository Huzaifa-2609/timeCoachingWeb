export default {
    name: 'news',
    type: 'document',
      title: 'News & Events',
    fields: [
        {
          name: 'image',
          type: 'image',
          title: 'Image'
        },
        {
            name:"title",
            type:"string",
            title:"Title"
        },
      {
        name: 'desc',
        type: 'text',
        title: 'Description'
      },
    ]
}