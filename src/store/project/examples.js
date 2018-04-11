
export const CLASSROOM_PROJECT = {
  label: 'Classroom App',
  identifier: 'classroom_app',
  schemas: [
    {
      _id: 'SCHEMA_2',
      enabled: true,
      label: 'User',
      label_plural: 'Users',
      identifier: 'user',
      identifier_plural: 'users',
      class_name: 'User',
      class_name_plural: 'Users',
      unqiue_id_prefix: 'US_',
      authentications: [],
      attributes: [
        {
          order: 0,
          label: 'Name',
          help: 'Name of the individual',
          required: false,
          datatype: 'TEXT',
          datatypeOptions: {},
          identifier: 'name',
          unique: true,
          _id: 'attr_1',
          preferred: true
        },
        {
          order: 1,
          label: 'E-Mail',
          help: 'E-Mail address associated with this Contact.',
          required: true,
          unique: false,
          preferred: false,
          datatype: 'TEXT',
          datatypeOptions: {},
          identifier: 'email',
          _id: 'attr_26577092992831',
          locked: true
        }
      ]
    },
    {
      _id: 'schema_15652994829682',
      label: 'Course',
      label_plural: 'Courses',
      identifier: 'course',
      identifier_plural: 'courses',
      attributes: [
        {
          order: 0,
          label: 'Label',
          identifier: 'label',
          help: '',
          required: true,
          unique: true,
          datatype: 'TEXT',
          datatypeOptions: {}
        },
        {
          order: 1,
          label: 'Assignments',
          identifier: 'assignment_ids',
          help: '',
          required: false,
          unique: false,
          datatype: 'RELATION',
          datatypeOptions: {
            relationType: 'HAS_MANY',
            schema_id: 'schema_4625927934382',
            reverse_relation: 'ATTR_27850403809506'
          },
          _id: 'ATTR_29485777414497'
        }
      ],
      display: {
        icon: 'fa-square-o',
        navbar_link: true
      },
      class_name: 'Course'
    },
    {
      _id: 'schema_4625927934382',
      label: 'Assignment',
      label_plural: 'Assignments',
      identifier: 'assignment',
      identifier_plural: 'assignments',
      attributes: [
        {
          order: 0,
          label: 'Label',
          identifier: 'label',
          help: '',
          required: false,
          unique: false,
          datatype: 'TEXT',
          datatypeOptions: {}
        },
        {
          order: 2,
          label: 'Course',
          identifier: 'course_id',
          help: '',
          required: false,
          unique: false,
          datatype: 'RELATION',
          datatypeOptions: {
            relationType: 'BELONGS_TO',
            schema_id: 'schema_15652994829682',
            reverse_relation: 'ATTR_29485777414497'
          },
          _id: 'ATTR_27850403809506'
        }
      ],
      display: {
        icon: 'fa-square-o',
        navbar_link: true
      },
      class_name: 'Assignment'
    }
  ],
  stack: {
    server: {
      id: 'expressjs'
    },
    client: {
      id: 'vuejs'
    },
    database: {
      id: 'mongodb'
    },
    features: [],
    deployments: []
  },
  _id: 'PR_66889694257848'
}

export const EXAMPLE_COLLECTION = [
  CLASSROOM_PROJECT
]
