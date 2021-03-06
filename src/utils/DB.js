import axios from 'axios';
import { resolve } from 'url';
import { rejects } from 'assert';

export default {

  getFavorites: function (userId) {
    let url ='https://wikiwalking.azurewebsites.net/api/wikiResults/' + userId + '/true';
    return new Promise(function(resolve, reject) {
      return axios.get(url)
        .then(function (res) {
          if(res.status === 200) {
            resolve(res)
          } else {
            rejects(Error(res.statusText));
          }
        });
    });
  }, 

  getUserData: function (userId) {
    let url ='https://wikiwalking.azurewebsites.net/api/wikiResults/' + userId;
    return new Promise(function(resolve, reject) {
      return axios.get(url)
        .then(function (res) {
          if(res.status === 200) {
            resolve(res)
          } else {
            rejects(Error(res.statusText));
          }
        });
    });
  },

  postFavorite: function (data) {
    let url = 'https://wikiwalking.azurewebsites.net/api/wikiResults';
    return new Promise(function(resolve, reject) {
      console.log('data passed', data)
      return axios.post(url, data)
        .then(function (res) {
          if(res.status === 201) {
            resolve(res)
          } else {
            reject(Error(res.statusText));
          }
        });
    });
  },

  putFavorite: function (userId, articleId, newFav) {
    let url = `https://wikiwalking.azurewebsites.net/api/wikiResults/${userId}/${articleId}`
    return new Promise(function(resolve, reject) {
      let favVal = 0;
      if(newFav == true){
        favVal = 1;
      }else{
        favVal = 0;
      }
      return axios.put(url, {favorited: favVal})
        .then(function(res) {
          if(res.status === 200) {
            resolve(res);
          }else{
            reject(Error(res.statusText));
          }
        });
    })
  }

}