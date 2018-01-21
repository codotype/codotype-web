<template>
  <div>
<!--     <header class="header">
      <nav class="navbar navbar-toggleable-md navbar-light bg-faded">

        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                data-target="#mobileMenu" aria-controls="mobileMenu" aria-expanded="false"
                aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <a class="navbar-brand" href="javascript:void(0)">
          <i class="fa fa-cutlery"></i> Order Lunch </a>

        <div class="collapse navbar-collapse" id="mobileMenu">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">Home</a>
            </li>
          </ul>
          <div class="my-2 my-lg-0">
            <a class="nav-item nav-link" href="https://github.com/ankurk91" target="_blank"><i
              class="fa fa-github"></i> GitHub</a>
          </div>
        </div>

      </nav>
    </header> -->

<!--     <main class="main container" v-cloak>
      <section class="row">
        <div class="col-lg-6 col-md-12 offset-lg-3" v-if="alert!=false">
          <div class="alert alert-dismissible fade show" :class="[alert.type]" role="alert">
            <button type="button" class="close" data-dismiss="alert" aria-label="Close" @click.prevent="alert=false">
              <span aria-hidden="true">&times;</span>
            </button>
            <div class="text-center">
              <i class="fa"
                 :class="{'fa-info-circle':alert.type=='alert-info','fa-check-circle':alert.type=='alert-success','fa-times-circle':alert.type=='alert-error','fa-exclamation-circle':alert.type=='alert-warning'}"></i>
              <span v-html="alert.message"></span>
            </div>
          </div>
        </div>
      </section>

      <section class="row">
        <div class="col-lg-4 col-md-12 offset-lg-4">

          <div class="card text-center mb-4" v-if="isLoading">
            <div class="card-block">
              <h4 class="card-title">
                Preparing Application
              </h4>
              <i class="fa fa-gear fa-spin fa-5x"></i>
            </div>
          </div>

          <div class="card text-center" v-if="showAuthCard">
            <div class="card-header">
              Authentication Required
            </div>
            <div class="card-block">
              <p class="card-text">In order to use this app you need to authenticate with your google
                account.</p>
              <button @click.prevent="auth(false)" type="button" class="btn btn-success btn-lg">
                <i class="fa fa-google"></i>
                Authenticate
              </button>
            </div>
          </div>

          <div class="card text-center" v-if="hideUserCard">
            <div class="card-block">
              <img class="rounded-circle mb-2"
                   alt="avatar" height="150px"
                   :src="user.image">
              <h4 class="card-title text-capitalize" v-text="user.name">User name</h4>
              <h6 class="card-subtitle text-muted" v-text="user.email">user-name@email.com</h6>
              <hr>
              <button :disabled="!canOrder" @click.prevent="placeOrder()" type="button"
                      class="btn btn-primary"><i class="fa fa-chevron-circle-right"></i>
                Confirm your order
              </button>
            </div>
          </div>
        </div>
      </section>
    </main> -->

    <footer class="footer text-center text-muted mt-4">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-12 text-lg-left"><i class="fa fa-copyright"></i> Ankur Kumar 2017</div>
          <div class="col-lg-6 col-md-12 text-lg-right"><i class="fa fa-rocket"></i> by
            <a class="text-muted" target="_blank" href="https://developers.google.com/sheets">Google Sheet API</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script type='text/javascript'>
  'use strict'
  import AppNavbar from './containers/app_navbar'
  import AppFooter from './containers/app_footer'
  import Notification from './containers/app_notification'

  let sheetName = 'blazeplate.io_01'
  const gapi = window.gapi

  const config = {
    oauth: {
      clientID: '540231188701-t4pjco404n921r9k347jo2dpp0pgell9.apps.googleusercontent.com', // get from here - https://console.developers.google.com
      scopes: ['https://www.googleapis.com/auth/spreadsheets', 'https://www.googleapis.com/auth/userinfo.email']
    },
    // https://docs.google.com/spreadsheets/d/SPREADSHEET_ID_FROM_HERE/edit
    spreadsheetId: '17SHgu0kODoZS-zQY3YvtKIU5gYo4xtCJYUY7g3QAdyE', // get spreadsheet id from spreadsheet url
    templateSheetID: '0' // usually 0 for the first sheet, gid value from url
  }

  // const config = API_CONFIG // this will be auto injected by webpack DefinePlugin
  export default {
    name: 'app',

    // Top-Level Application Components
    components: {
      AppNavbar,
      Notification,
      AppFooter
    },

    // Top-Level page Meta
    metaInfo: {
      title: 'Loading...', // set a title
      titleTemplate: 'blazeplate.io - %s', // title is now 'blazeplate.io - Loading...'
      htmlAttrs: {
        lang: 'en'
      }
    },
    data () {
      return {
        user: {
          name: '',
          email: '',
          src: ''
        },
        alert: {}, // alert.type, alert.message
        isLoading: true,
        showAuthCard: false,
        hideUserCard: false,
        canOrder: false
      }
    },
    methods: {
      auth () {
        console.info('Start oauth...')
        gapi.auth.authorize({
          'client_id': '540231188701-t4pjco404n921r9k347jo2dpp0pgell9.apps.googleusercontent.com',
          'scope': ['https://www.googleapis.com/auth/spreadsheets', 'https://www.googleapis.com/auth/userinfo.email'],
          'immediate': false
        }, (result) => this.handleAuthResult(result))
      },
      handleAuthResult (authResult) {
        if (authResult && !authResult.error) {
          console.info('User is authenticated')
          console.log(this)
          window.application = this
          this.showAuthCard = false
          this.isLoading = true
          this.getUser()
        } else {
          console.info('User is not authenticated')
          console.log(authResult)
          // this.showAuthCard = true
          // this.isLoading = false
        }
      },
      getUser () {
        gapi.client.load('plus', 'v1', () => {
          gapi.client.plus.people.get({
            'userId': 'me'
          }).execute((response) => {
            console.info('Got user info')
            console.log(response)
            this.updateUser(response)
            this.loadSheetAPI()
          })
        })
      },
      updateUser (response) {
        console.info('Updating user info...')
        if (typeof response === 'undefined') {
          console.error('Unable to load user info')
          this.makeAlert('danger', 'Unable to load user information, try again')
          return false
        }
        // Assuming that email address have a dot
        let nameParts = response.emails[0].value.split('@')[0].split('.')
        this.user = {
          email: response.emails[0].value,
          image: response.image.url.split('?sz=')[0] + '?sz=150',
          name: nameParts[0] + ' ' + nameParts[1]
        }
        this.hideUserCard = true
      },
      loadSheetAPI () {
        console.info('Loading sheet api...')
        gapi.client.load('https://sheets.googleapis.com/$discovery/rest?version=v4')
          .then(this.getAllSheets, (resp) => {
            console.error('Unable to load sheet api')
          })
      },
      getAllSheets () {
        console.info('Fetching sheet list ...')
        gapi.client.sheets.spreadsheets.get({
          spreadsheetId: config.spreadsheetId
        }).then((response) => {
          console.log(response)
          console.log(this)
          console.log('this.checkIfSheetExist(response)')
          console.log(window.application)
          window.application.checkIfSheetExist(response)
        }, function (response) {
          console.error('Unable to fetch sheet list')
        })
      },
      checkIfSheetExist (response) {
        this.currentSheet = sheetName
        if (response.result && response.result.sheets) {
          console.log('Lets find sheet with name - ' + sheetName)
          let found = response.result.sheets.filter((sheet) => {
            console.log('Found sheet - ' + sheet.properties.title)
            return (sheet.properties.title === sheetName)
          })
          console.log(found)
          if (found.length !== 0) {
            console.info('Sheet exists already')
            this.canOrderToday(false)
          } else {
            this.createNewSheet(sheetName)
          }
        } else {
          console.error('Invalid sheet response')
        }
      },
      createNewSheet (sheetName) {
        console.info('Creating new sheet...')

        gapi.client.sheets.spreadsheets.batchUpdate({
          spreadsheetId: config.spreadsheetId,
          requests: [{
            duplicateSheet: {
              'sourceSheetId': config.templateSheetID,
              'newSheetName': sheetName
            }
          }]
        }).then((response) => {
          console.info('New sheet created- ' + sheetName)
          this.isLoading = false
          this.canOrder = true
        }, (response) => {
          console.error('Sheet was not created')
          this.isLoading = false
        })
      },
      canOrderToday (email) {
        console.info('Get records from this month sheet....')

        gapi.client.sheets.spreadsheets.values.get({
          spreadsheetId: config.spreadsheetId,
          range: this.currentSheet + '!A2:C'
        }).then((response) => {
          this.isLoading = false
          console.info('Got rows from this months sheet')
          console.log(response)
          let data = response.result

          if (data.values && data.values.length > 0) {
            let found = data.values.filter((row) => {
              if (row[0] === this.today) {
                if (row[1] === this.user.email) {
                  return row
                }
              }
            })
            if (found.length !== 0) {
              this.makeAlert('info', 'You have already ordered for today')
              console.info('You have already ordered for today')
              this.canOrder = false
              return false
            }
          } else {
            // console.info('No data/row found in sheet- ' + this.currentSheet)
          }
          this.canOrder = true
          return true
        }, (response) => {
          this.isLoading = false
          // console.error('Unable to fetch rows from sheet- ' + this.currentSheet)
          return false
        })
      },
      placeOrder () {
        this.canOrder = false
        console.info('Saving new order...')

        gapi.client.sheets.spreadsheets.values.append({
          spreadsheetId: config.spreadsheetId,
          range: this.currentSheet + '!A2:C2',
          valueInputOption: 'USER_ENTERED',
          majorDimension: 'ROWS',
          values: [[this.today, this.user.email, new Date().toLocaleString('en-IN')]]
        }).then((response) => {
          this.makeAlert('success', 'Your order has been placed')
          console.info('New order has been placed')
        }, (response) => {
          this.makeAlert('danger', 'Unable to place order')
          console.error('Unable to place order')
        })
      },
      makeAlert (type, message) {
        this.alert = {
          type: 'alert-' + type,
          message: message
        }
      }
    },
    computed: {
      currentSheet () {
        return 'Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec'.split(',')[new Date().getMonth()]
      },
      today () {
        let today = new Date()
        return today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear()
      }
    }
  }
</script>
