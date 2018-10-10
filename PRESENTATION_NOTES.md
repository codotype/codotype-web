# PRESENTATION NOTES

Introduce myself and blazeplate

SO - who here has been ever built a full-stack web application.

I build lots of web apps, and when I have a new idea I like to execute on it quickly.

A great quote - inspiration is perishable. I usually want to get something on the page before I lose interest or motivation.

The problem is that starting a new full-stack web project is often intimidating for beginners and tedious for experienced developers.

Think about it - even the most basic applications share a lot of common :
- Database setup and configuration
- User authentication, roles, and management
- WHAT ELSE?

And I feel like that applies to software (and web dev) a lot. You just want to bake an apple pie, but you spend most of your time inventing the universe. This is where boilerplate applications come into the mix.

# # # # #

SO - let's say that you want to bake an apple pie - on in the case case of a web developer, build a simple application.

Let's say you wanted to build an application for managing a class of students. You have courses, assignments, and grades.

# # # # #

SO - those of you not familiar with the term, a 'boilerplate' application refers to a pre-configured and organized generic codebase upon which you can build your app. There are a lot of popular boilerplate repositories on GitHub for a variety of differnet languages and frameworks. A boilerplate codebase is a great way to jumpstart a new project before the inspiration leaves you.

Introduce Hackathon Starter by sahat. How many stars / forks?

Hackathon Starter is a very popular boilerplate application for a full-stack Node.js/Express.js application. However, it's got some problems:
- Way more features than you actually need (so you waste time removing features, thus partially negating the time-saving benefits of using a boilerplate codebase in the first place)
- Designed more for hacking that building production-ready applications
- Boilerplate applications make assumptions about the language, frameworks, style, and features you want - and those assumptions aren't alwasy working in your best favor.

ON TOP OF THIS - even if you fork something like Hackathon Starter you still have to build YOUR code on top of it, which can be tedious - especially if you either don't know where to begin or you have to write a basic CRUD API before you can actually start building your application logic.

INTRODUCE RAILS GENERATE?
The `rails generate` command in Ruby On Rails (<3) allows a developer to quickly generate a new applicatoin resource across the entire stack with a single command. It's very powerful and it enables beginners to feel empowered by their new skills and enables experienced developers to quickly prototype and iterate in the early stages of a new project. I love Rails generate, and idealogically it's been a guiding force in the development of blazeplate

# # # #

SO - blazeplate


# # # #

DEMO

What app should I build during the demo? Introduce the application earlier in the presentation.
NOTE - some of these should be example applications
- Contact Manager (JUST CONTACTS)
- Restaurant Shift Manager (SHIFT has many WORKERS)
- Course / Student / Assignment / Grades manager
  - COURSE has many STUDENTS
  - COURSE has many ASSIGNMENTS
  - GRADE has one ASSIGNMENT
  - STUDENT has many GRADES

TODO - provision a server to scp the app to during the presentation, and unzip and run `docker-compose up`

# # # # #
# # # # #
# # # # #
README NOTES


TODOs
- Form validations
- Fix routing bugs (can do with Vuex if needed)

-------

CORE FEATURES FIRST
TODO - gradient for SOLID buttons, navs
TODO - Add SEED admin user

SERVER TECH NOTES
https://github.com/simov/purest
https://github.com/simov/grant

---------


Built with:
- [driver.js](https://github.com/kamranahmedse/driver.js)

---------

## Notes on relation refactor
QUESTION - what should the scope of relations be in the application?
Should it be like this (#12):
```
app: {
  schemas: [
    {
      id: '',
      label: 'Task',
      label_plural: 'Tasks',
      identifier: 'task',
      identifier_plural: 'tasks',
      class_name: 'Task',
      class_name_plural: 'Tasks',
      attributes: [ ... ],
      relations: [ ... ]
    }
  ]
}
```

or should it be like this (#2):
```
app: {
  schemas: [
    {
      id: '',
      label: 'Task',
      label_plural: 'Tasks',
      identifier: 'task',
      identifier_plural: 'tasks',
      class_name: 'Task',
      class_name_plural: 'Tasks',
      attributes: [ ... ],
    }
  ]
  relations: [ ... ]
}
```

QUESTION - what's the easiest structure to work with at compile time?
QUESTION - what's the easiest structure to build?
All are probably equally difficult to edit manually - nuanced, but not impossible

Relation attributes (currently):
```js
{
  "order": 2,
  "id": "...",
  "label": "Tasks",
  "identifier": "task_ids",
  "help": "",
  "required": false,
  "unique": false,
  "datatype": "RELATION",
  "datatypeOptions": {
    "relationType": "OWNS_MANY",
    "schema_id": "...",
    "reverse_relation": "..."
  },
  "locked": true
}
```

Notes on this (User HAS MANY Tasks):
TODO - needs a place to keep 'Alias'
```js
{
  "order": 2,
  "id": "...",
  "label": "Tasks", // Doesn't handle 'Alias'
  "identifier": "task_ids", // Doesn't handle 'Alias'
  "help": "Tasks belonging to this User", // Not really needed on relation
  "required": false,
  "unique": false,
  "datatype": "RELATION",
  "datatypeOptions": {
    "relationType": "OWNS_MANY", // A byproduct of BELONGS_TO -
    "schema_id": "...",
    "reverse_relation": "..."
  },
  "locked": true
}
```

```js
// printer.model.js
const mongoose, { Schema } = require('mongoose')

const userSchema = new Schema({
  email: String
});

module.exports = mongoose.model('User', userSchema)
```

```js
// printer.model.js
const mongoose, { Schema, ObjectID } = require('mongoose')

const printerSchema = new Schema({
  label: String,
  owner_id: {
    type: ObjectID,
    ref: 'User'
  }
  done: Boolean

});

module.exports = mongoose.model('Printer', printerSchema)
```

```js
// printer.controller.js
const Printer = require('printer.model')
const User = require('user.model')

module.exports.getOwner = (req, res) => {
  Printer.findById(req.id)
  .then((printer) => {
    User.findById(printer.owner_id)
    .then((user) => {
      res
      .status(200)
      .send({
        owner: user
      })
    })
  })
}
```

```js
// user.controller.js
const Printer = require('printer.model')
const User = require('user.model')

GET /api/users/:id/machines
module.exports.getMachines = (req, res) => {
    return Printer.find({
      owner_id: req.id
    })
    .then((printers) => {
      res
      .status(200)
      .send({
        machines: printers
      })
    })
}
```

```js
// resource.controller.js
// Require models
<%_ forEach(schema.relations, (each) => _%>
const <%= each.class_name %> = require('../<%= each.identifier %>/<%= each.identifier %>.model.js')
<%_ }) _%>

<%_ forEach(schema.relations, (relation) => _%>

<%_ if (relation.type === 'OWNS_MANY') _%>
GET /api/<%= schema.identifier_plural %>/:id/<%= relation.alias.identifier_plural %>
module.exports.get<%= relation.alias.class_name_plural %> = (req, res) => {
    return <%= relation.schema.class_name %>.find({
      owner_id: req.params.id
    })
    .then((<%= relation.schema.identifier_plural %>) => {
      res
      .status(200)
      .send({
        <%= relation.alias.identifier_plural %>: <%= relation.schema.identifier_plural %>
      })
    })
}

<%_ else if (relation.type === 'BELONGS_TO') { _%>
GET /api/<%= schema.identifier_plural %>/:id/<%= relation.alias.identifier %>
module.exports.get<%= relation.alias.class_name %> = (req, res) => {
  return <%= schema.class_name %>
  .findById(req.params.id)
  .then((<%= schema.identifier %>) => {

    return <%= relation.schema.class_name %>
    .findById(<%= schema.identifier %>.<%= relation.alias.class_name %>_id)
    .then((<%= relation.schema.identifier %>) => {
      res
      .status(200)
      .send({
        <%= relation.alias.identifier %>: <%= relation.schema.identifier %>
      })
    })

  })
}
<%_ } _%>
<%_ }) _%>
```

User OWNS_MANY Printers, aliased as `Machines`
Printer BELONGS_TO User, aliased as `Owner`

Question about the above
can the frontend ensures SOME level of scope safety?
The above example requires both relations to have all
the "meta attributes" for the actual schema and whatever it's aliased as.

Potential relation restructure (what we want at runtime):
- deleted `unique` - too subjective
- deleted 'label'
- deleted `help` - not sure what we should do about `help` going forward...
- moved `relationType' to datatype
- deleted datatypeOptions.relationType
```js
{
  id: '...',
  order: 2,
  type: 'OWNS_MANY', // Moved from datatypeOptions.relationType
  required: false,
  related_schema_id: '...', // Do we need this at runtime?
  reverse_relation_id: '...', // Do we need this at runtime?
  schema: {
    label: 'User',
    label_plural: 'Users',
    identifier: 'user',
    identifier_plural: 'users',
    class_name: 'User',
    class_name_plural: 'Users'
  },
  alias: {
    label: 'Owner',
    label_plural: 'Owners',
    identifier: 'owner',
    identifier_plural: 'owners',
    class_name: 'Owner',
    class_name_plural: 'Owners'
  }
}
```

// // //

Give us a model name: 'Task'

What we generate:

label: 'Task',
label_plural: 'Tasks',
identifier: 'task',
identifier_plural: 'tasks',
class_name: 'Task',
class_name_plural: 'Tasks'


How are these attributes used? We compile templates with them.


Let's write a simple basic class definition for our new 'Task' model.
Good idea - have tabs that show the codotype compiled example in a few different languages
(please ignore the missing validations and timestamps)

```js
const mongoose, { Schema } = require('mongoose')

const Task = new Schema({
  label: String,
  done: Boolean
});

module.exports = mongoose.model('Task', Task)
```

TODO - add an example snippet that could make use of all the metadata attributes

This is ALSO what's needed to display things in the front-end correctly
```js
{
  id: '...',
  order: 2,
  type: 'OWNS_MANY', // Moved from datatypeOptions.relationType
  required: false,
  related_schema_id: '...', // Do we need this at runtime?
  reverse_relation_id: '...', // Do we need this at runtime?
  related_lead_attribute: 'label', // The 'display-ready' attribute
  schema: {
    label: 'User',
    label_plural: 'Users',
    identifier: 'user',
    identifier_plural: 'users',
    class_name: 'User',
    class_name_plural: 'Users'
  },
  alias: {
    label: 'Owner',
    label_plural: 'Owners',
    identifier: 'owner',
    identifier_plural: 'owners',
    class_name: 'Owner',
    class_name_plural: 'Owners'
  }
}
```

How can we store this in a way that's a little more compact?
Notes:
- `alias` and `schema` objects are defined on-the-fly
^ this method allows for relations to be editable, which is great
```js
{
  id: '...',
  order: 2,
  type: 'OWNS_MANY', // Moved from datatypeOptions.relationType
  required: false,
  related_schema_id: '...',
  reverse_relation_id: '...',
  as: 'Owner'
}
```

Run the following function to expand a relation:

```js
function inflateMeta(label) {
  return {
    label: titleize(label)
    label_plural: pluralize(titleize(label))
    identifier: underscored(label)
    identifier_plural: underscored(pluralize(label))
    class_name: classify(titleize(label))
    class_name_plural: pluralize(classify(titleize(label)))
  }
}

function inflateRelation({ schemas, relation }) {
  // Clones the base attributes from the relation
  let inflated = { ...relation }

  // defines inflated.alias && inflate.schema
  const relatedSchema = schemas.find((s) => { s.id === relation.reverse_relation_id })
  inflated.schema = inflateMeta(relatedSchema.label)
  inflated.alias = inflateMeta(inflated.as || relatedSchema.label)
  inflated.related_lead_attribute = relatedSchema.attributes[0].identifier

  // Returns the inflated relation
  return inflated;
}

function inflateSchema({ schema, schemas }) {
  let inflated = { ...schema }
  relation.schema_id = schema._id // TODO - abstract into 'relation/createModel'
  inflated.relations = schema.relations.map(relation => inflateRelation({ schemas, relation }))
  inflated.attributes = schema.attributes.map(attribute => attribute)
  return inflated
}

// object that gets passed into the generator
const config = {
  id: '...',
  schemas: schemas.map(schema => inflateSchema({ schema, schemas }))
}
```
