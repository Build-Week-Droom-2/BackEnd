
exports.seed = function(knex) {
      return knex('authentication').insert([
        {id: 1, email: 'susan45@gmail.com', account: 1, password: 'susan6789'},
        {id: 2, email: 'ron_rt@gmail.com', account: 1, password: 'sun8943423'},
        {id: 3, email: 'condor_applications@gmail.com', account: 2, password: 'condor_543489'}
      ]);
};
