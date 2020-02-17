export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    https://www.ember-cli-mirage.com/docs/route-handlers/shorthands
  */

  this.namespace = 'api';

  this.get('/plants', () => {
    return {
      data: [
        {
          id: 1,
          type: 'plants',
          attributes: {
            name: 'Euphorbia eritrea',
            sun: 'high',
            water: 'rarely',
            url: 'https://front-static-recruitment.s3.amazonaws.com/euphorbia-eritrea.jpg',
            price: 25,
            toxicity: false
          }
        },
        {
          id: 2,
          type: 'plants',
          attributes: {
            name: 'Succulent Bowl',
            sun: 'high',
            water: 'rarely',
            url: 'https://front-static-recruitment.s3.amazonaws.com/succulent-bowl.jpg',
            price: 30,
            toxicity: false
          }
        },
        {
          id: 3,
          type: 'plants',
          attributes: {
            name: 'Bunny ears cacti',
            sun: 'high',
            water: 'rarely',
            url: 'https://front-static-recruitment.s3.amazonaws.com/bunny-ears-cacti.jpg',
            price: 20,
            toxicity: false
          }
        },
        {
          id: 4,
          type: 'plants',
          attributes: {
            name: 'Ficus lyrata',
            sun: 'high',
            water: 'regularly',
            url: 'https://front-static-recruitment.s3.amazonaws.com/ficus-lyrata.jpg',
            price: 30,
            toxicity: false
          }
        }
      ]
    };
  });
}