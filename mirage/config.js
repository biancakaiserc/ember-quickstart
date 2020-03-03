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

  this.namespace = '/api';

  let formSteps = [
    {
      id: 1,
      type: 'steps',
      attributes: {
        type: 'sunlight',
        title: 'First, set the amount of sunlight you plant will get.',
        image: 'teste1',
        color: 'coral',
        cards: [
          {
            subtitle: 'High Sunlight',
            icon: '1'
          },
          {
            subtitle: 'Low Sunlight',
            icon: '2'
          },
          {
            subtitle: 'No Sunlight',
            icon: '3'
          }
        ]
      }
    },
    {
      id: 1,
      type: 'steps',
      attributes: {
        type: 'water',
        title: 'How often do you want to water your plant?',
        image: 'teste1',
        color: 'green',
        cards: [
          {
            subtitle: 'Rarely',
            icon: '1'
          },
          {
            subtitle: 'Regularly',
            icon: '2'
          },
          {
            subtitle: 'Daily',
            icon: '3'
          }
        ]
      }
    },
    {
      id: 1,
      type: 'steps',
      attributes: {
        type: 'pets',
        title: 'Do you have pets? Do they chew plants?',
        image: 'teste1',
        color: 'coral',
        cards: [
          {
            subtitle: 'Yes',
            icon: '1'
          },
          {
            subtitle: "No/They don't care",
            icon: '2'
          }
        ]
      }
    }
  ];

  let plantsArr = [
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
  ];

  this.get('/plants', function(db, request) {
    if(request.queryParams.water !== undefined) {
      let filteredPlants = plantsArr.filter(function(i) {
        return i.attributes.water.toLowerCase().indexOf(request.queryParams.water.toLowerCase()) !== -1;
      });
      return { data: filteredPlants };
    } else {
      return { data: plantsArr };
    }
  });

  // Find and return the provided rental from our rental list above
  this.get('/plants/:id', function (db, request) {
    return { data: plantsArr.find((plant) => request.params.id == plant.id)};
  });


  this.get('/steps', function(db, request) {
    return { data: formSteps };
  });

  this.get('/steps/:id', function(db, request) {
    return { data: formSteps.find((step) => request.params.id == step.id) };
  });
}
