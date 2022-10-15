export default {
    name: 'teachers',
    type: 'document',
      title: 'Teachers',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name'
      },
      {
        title: 'HOD?',
        name: 'hod',
        type: 'boolean'
      },
      {
        name: 'image',
        type: 'image',
        title: 'Image'
      },
      {
        name: 'qualification',
        type: 'string',
        title: 'Qualification'
      },
      {
        title: 'Teaching Since',
        name: 'since',
        type: 'date',
        options:{
            dateFormat:"YYYY"
        }
      },
      {
        title: 'Department',
        name: 'dept',
        type: 'reference',
        to: [{type: 'depart'}]
      }
    ]
}