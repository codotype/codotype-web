<template>
    <div class="container h-100">
        <div class="row d-flex justify-content-center">
            <div class="col-lg-4">

                <div class="card card-body bg-dark text-light border-light">
                    <h4 class="card-title">Sign In</h4>
                    <button class="btn btn-block btn-outline-primary" @click="authenticate()">
                      <i class="fa fa-google"></i>
                      Sign In with Google
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import auth from '../../../services/auth.js'
import FormInput from '@/components/FormInput'
import FormSubmit from '@/components/FormSubmit'

export default {
  data () {
    return {
      email: 'alex@foo.bar',
      password: 'abc123abc123',
      remember: false,
      loading: false,
      error: false
    }
  },

  components: {
    FormInput,
    FormSubmit
  },

  methods: {
    authenticate () {
      this.$store.dispatch('auth/googleAuthenticate')
    }
  }
}
</script>
