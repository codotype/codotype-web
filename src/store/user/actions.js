import ProjectFactory from './factory'

// // // //

// actions
// functions that causes side effects and can involve asynchronous operations.
const actions = {
  fetchCollection: ({ commit }) => ProjectFactory.fetchCollection({ commit }),

  fetchModel: ({ commit }, id) => ProjectFactory.fetchModel({ commit }, id),

  create: ({ commit }, attributes) => ProjectFactory.create({ commit }, attributes),

  update: ({ commit }, attributes) => ProjectFactory.update({ commit }, attributes),

  destroy: ({ commit }, id) => ProjectFactory.destroy({ commit }, id)
}

// // // //

export default actions
