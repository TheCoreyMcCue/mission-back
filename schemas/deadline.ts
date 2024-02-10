export default {
  name: 'deadline',
  title: 'Deadline',
  type: 'document',
  fields: [
    {name: 'name', title: 'Name', type: 'string'},
    {name: 'date', title: 'date', type: 'string'},
    {
      name: 'author',
      type: 'reference',
      title: 'Author',
      to: [{type: 'user'}],
    },
  ],
}
