<template>

  <div class="row">
    <div class="col-lg-12" v-if="!editing">

      <!-- MacroList -->
      <draggable v-model='dropdownOptions' :options="sortableOptions" element="ul" class='list-group'>

          <!-- Child View -->
          <li class="list-group-item border-light bg-dark text-light" v-for="element in dropdownOptions" :key="element.id">
            <div class="row d-flex align-items-center">
              <div class="col-lg-2">
                <i class="fa fa-fw fa-bars drag-handle"></i>
              </div>
              <div class="col-lg-6">
                {{ element.value }}
              </div>
              <div class="col-lg-4 text-right">
                <button class="btn btn-sm btn-outline-warning" @click="editOption(element)">
                  <i class="fa fa-fw fa-pencil"></i>
                </button>
                <button class="btn btn-sm btn-outline-danger" @click="destroyOption(element)">
                  <i class="fa fa-fw fa-trash"></i>
                </button>
              </div>
            </div>
          </li>

      </draggable>

      <!-- Add Option -->
      <button class="btn btn btn-outline-success btn-block mt-4" @click="addOption()">
        <i class="fa fa-fw fa-plus mr-2"></i>
        Dropdown Option
      </button>

    </div>

    <!-- Dropdown Option Form -->
    <div class="col-lg-12" v-if="editing">
      <div class="card card-body border-light bg-dark text-light">

        <!-- Form Header -->
        <div class="row">
          <div class="col-lg-6">
            <p class="lead mb-0" v-if="editing.id">Edit Dropdown Option</p>
            <p class="lead mb-0" v-else>New Dropdown Option</p>
          </div>
          <div class="col-lg-6 text-right">
            <div class="btn-group">
              <button class="btn btn-sm btn-outline-secondary" @click="cancelEditing(editing)">
                <i class="fa fa-fw fa-times mr-1"></i>
                Cancel
              </button>
              <button class="btn btn-outline-success" @click="submitEditing(editing)">
                <i class="fa fa-fw fa-check mr-1"></i>
                Submit
              </button>
            </div>
          </div>
        </div>
        <hr>

        <!-- Form Body -->
        <div class="row">
          <div class="col-lg-12">
            <input class='form-control' type="text" v-model="editing.value" placeholder='Dropdown Value' v-if="type === 'TEXT_SELECT'">
            <input class='form-control' type="number" v-model="editing.value" placeholder='Dropdown Value' v-if="type === 'NUMBER_SELECT'">
          </div>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
import _ from 'lodash'
import draggable from 'vuedraggable'

export default {
  props: ['type', 'value'],
  components: {
    draggable
  },
  data () {
    let data = {
      editing: null,
      myArray: this.buildArray()
    }
    return data
  },
  methods: {
    buildArray () {
      if (this.value && Array.isArray(this.value)) {
        return _.map(this.value, (v, i) => {
          return { id: i + 1, value: v }
        })
      } else if (this.type === 'TEXT_SELECT') {
        return [
          { id: 1, value: 'Option 1' },
          { id: 2, value: 'Option 2' }
        ]
      } else {
        return [
          { id: 1, value: 1000 },
          { id: 2, value: 2000 }
        ]
      }
    },
    cancelEditing (editing) {
      this.editing = null
    },
    submitEditing (editing) {
      if (editing.id) {
        this.myArray = _.map(this.myArray, (el) => {
          if (editing.id === el.id) {
            return editing
          } else {
            return el
          }
        })
      } else {
        editing.id = this.myArray.length + 1
        this.myArray.push(editing)
      }
      // Clears the editing flag
      this.editing = null
      this.updateValue()
    },
    addOption () {
      this.editing = { id: null, value: '' }
    },
    editOption (element) {
      this.editing = _.clone(element)
    },
    destroyOption (element) {
      this.myArray = _.filter(this.myArray, (el) => { return el.id !== element.id })
      this.updateValue()
    },
    updateValue () {
      this.$emit('input', _.map(this.myArray, (el) => { return el.value }))
    }
  },
  computed: {
    sortableOptions () {
      return {
        animation: 150,
        handle: '.drag-handle',
        ghostClass: 'ghost', // Class name for the drop placeholder
        chosenClass: 'chosen', // Class name for the chosen item
        dragClass: 'drag', // Class name for the dragging item
        fallbackTolerance: 100
      }
    },
    dropdownOptions: {
      get () {
        return this.myArray
      },
      set (value) {
        this.myArray = value
        this.updateValue()
      }
    }
  }
}
</script>


<style lang="sass" scoped>
  li.list-group-item

    i.drag-handle
      cursor: pointer

    button
      opacity: 0
      transition: opacity 0.3s ease-in-out

    &:hover
      button
        opacity: 1
</style>
