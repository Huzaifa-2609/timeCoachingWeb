export default {
    name: 'depart',
    type: 'document',
      title: 'Department',
    fields: [
      {
        name: 'deptname',
        type: 'string',
        title: 'Name'
      },
      {
        name: 'hod',
        title: 'HOD',
        type: 'reference',
        to: [{type: 'teachers'}]
      },
      {
        name: 'bannerimage',
        type: 'image',
        title: 'Banner Image'
      },
    ]
}