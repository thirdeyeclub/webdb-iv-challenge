exports.seed = function(knex) {
  return knex('dishes').insert([
    { id: 1 , name: 'Red Curry Noodles' },
    { id: 2 , name: 'Buffalo Caesar Wrap' },
    { id: 3 , name: 'Sweet Potato Pizza Crust' },
    { id: 4 , name: 'Poblano Potato Breakfast Tacos' },
    { id: 5 , name: 'Strawberry Rosé Pancakes' },
    { id: 6 , name: 'Skillet Tempeh Pasta ' },
  ]);
};