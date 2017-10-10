import React, { Component } from 'react';
import { apiUrl, restId } from '../config/constants';
import axios from 'axios';

// export function getRestaurantDetails() {
//   return axios.get(apiUrl + 'details/' + restId)
//     .then(res => {
//       return res;
//     });
// }
export function saveCustomerDetails(data) {
  return axios.post('http://yiiapi-local.com/clientdetails/create',data)
    .then(response => {
      return response;
    });
}




