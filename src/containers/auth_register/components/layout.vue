<template>
    <div class="container h-100">
        <div class="row d-flex justify-content-center">
            <div class="col-lg-4">

                <div class="card card-body bg-dark text-light border-light">
                    <h4 class="card-title">Register</h4>
                    <p class="card-text" v-if="$route.query.redirect">You need to login first.</p>

                      <form @submit.prevent="register">
                          <fieldset>

                              <!-- <FormInput></FormInput> -->

                              <div class="form-group">
                                  <input class="form-control" placeholder="E-mail" v-model="email" type="text">
                              </div>

                              <div class="form-group">
                                  <input class="form-control" placeholder="Password" v-model="password" type="password" value="">
                              </div>

                              <FormSubmit></FormSubmit>

                              <p v-if="error" class="error">Bad registration information</p>

                          </fieldset>

                      </form>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
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
    isValid () {
      return !(this.email === '' || this.password === '')
    },
    register () {
      if (!this.isValid()) { return }
      return this.$store.dispatch('auth/register', { username: this.email, password: this.password })
    }
  }
}
</script>
