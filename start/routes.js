'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'OK :D' }
})

Route.post('/auth', "AuthController.authenticate");

Route.post('/user/new', "UserController.store");
Route.post('/user/list', "UserController.index");

Route.get('/interests/:value', "InterestController.index");
Route.get('/suggestions/:value', "SuggestionController.index");
