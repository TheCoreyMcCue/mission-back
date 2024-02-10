export default {
  name: 'user',
  title: 'User',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'string',
      options: {
        hotspot: true,
      },
    },
    {name: 'name', title: 'Name', type: 'string'},
    {name: 'email', title: 'Email', type: 'string'},
    {name: 'admin', title: 'Admin', type: 'boolean'},
    {name: 'slug', title: 'Slug', type: 'slug', options: {source: 'name'}},
  ],
}

/* 
example of how to reference user in a different schema

export default {
  name: 'post',
  type: 'document',
  fields: [
    // other fields
    // ...
		{
		name: 'author',
        type: 'reference',
		title: 'Author',
        to: [{type: 'user' }]
    }
  ]
}
*/
