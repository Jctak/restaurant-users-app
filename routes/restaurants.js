/* jshint esversion:8 */
const express = require('express'),
  router = express.Router(),
  RestaurantModel = require('../models/restaurants');

router.get('/', async (req, res, next) => {
  const allRestaurants = await RestaurantModel.getAll();
  if(req.session.is_logged_in === true){
    res.render('template', {
      locals: {
        title: 'List of Restaurants',
        restaurantList: allRestaurants
      },
      partials: {
        partial: 'partial-restaurants'
      }
    });
  } else {
    res.redirect('/');
  }
});

module.exports = router;
