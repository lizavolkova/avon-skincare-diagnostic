'use strict';

module.exports = /*@ngInject*/
  function configService(/* inject dependencies here, i.e. : $rootScope */) {
  var configs = {
				social: [
					{ network: "facebook", on: "true" },
					{ network: "twitter", on: "true" },
					{ network: "pinterest", on: "true"},
					{ network: "google", on: "true" },
					{ network: "vk", on: "true" }
				],
				products: [
					{
						fsc: 123,
						title: 'This is product 123!',
						description: 'Product 123 has a lot of amazing benefits you should care about',
						price: 10,
						salePrice: 5
					},
					{
						fsc: 456,
						title: 'This is product 456!',
						description: 'Product 456 has a lot of amazing benefits you should care about',
						price: 15
					},
					{
						fsc: 246,
						title: 'This is product 246!',
						description: 'Product 246 has a lot of amazing benefits you should care about',
						price: 30
					}
				],
				questions: {
					branch: true,
					branchQuestion: { 
						title: 'This is the branch question',
						answers: [
							{ id: 0, title: 'answer 1', path: 'path1'},
							{ id: 1, title: 'answer 2', path: 'path2'}
						]
					},
					path1: {
						questions: [
							{ 
								id: 0, 
								title: 'This is question 1 in path 1',
								resultsLayout: 'main', 
								answers: [
									{ id: 0, title: 'answer 1', prodId: '123', resultsCopy: 'Product 123 was chosen for you because...'},
									{ id: 1, title: 'answer 2', prodId: '456', resultsCopy: 'Product 456 was chosen for you because...'}, 
									{ id: 2, title: 'answer 3', prodId: '789', resultsCopy: 'Product 789 was chosen for you because...'},
								]
							},
							{ 
								id: 1, 
								title: 'This is question 2 in path 1',
								resultsLayout: 'secondary', 
								answers: [
									{ id: 0, title: 'answer 1', prodId: '246', resultsCopy: 'Product 123 was chosen for you because...'},
									{ id: 1, title: 'answer 2', prodId: '810', resultsCopy: 'Product 456 was chosen for you because...'}, 
									{ id: 2, title: 'answer 3', prodId: '121', resultsCopy: 'Product 789 was chosen for you because...'},
								]
							}
						]
					},
					path2: {
						questions: [
							{ 
								id: 0, 
								title: 'This is question 1 in path 2',
								resultsLayout: 'main', 
								answers: [
									{ id: 0, title: 'answer 1', prodId: '123', resultsCopy: 'Product 123 was chosen for you because...'},
									{ id: 1, title: 'answer 2', prodId: '456', resultsCopy: 'Product 456 was chosen for you because...'}, 
									{ id: 2, title: 'answer 3', prodId: '789', resultsCopy: 'Product 789 was chosen for you because...'},
								]
							},
							{ 
								id: 1, 
								title: 'This is question 2 in path 2',
								resultsLayout: 'secondary', 
								answers: [
									{ id: 0, title: 'answer 1', prodId: '246', resultsCopy: 'Product 123 was chosen for you because...'},
									{ id: 1, title: 'answer 2', prodId: '810', resultsCopy: 'Product 456 was chosen for you because...'}, 
									{ id: 2, title: 'answer 3', prodId: '121', resultsCopy: 'Product 789 was chosen for you because...'},
								]
							},
							{ 
								id: 1, 
								title: 'This is question 3 in path 2',
								resultsLayout: 'secondary', 
								answers: [
									{ id: 0, title: 'answer 1', prodId: '246', resultsCopy: 'Product 123 was chosen for you because...'},
									{ id: 1, title: 'answer 2', prodId: '810', resultsCopy: 'Product 456 was chosen for you because...'}, 
									{ id: 2, title: 'answer 3', prodId: '121', resultsCopy: 'Product 789 was chosen for you because...'},
								]
							}
						]
					}

					// { 
					// 	id: 0, 
					// 	title: 'This is the branch question',
					// 	type: 'branch',
					// 	answers: [
					// 		{ id: 0, title: 'answer 1', path: 1},
					// 		{ id: 1, title: 'answer 2', path: 2}
					// 	]
					// },
					
				},
				translations: {
					home: {
						heading: "Welcome to the diagnostic!",
						subheading: "Enter your name to get started"
					},
					header: {
						attached: "Shopping with: ",
						unattached: "Find a Rep"
					}
				}
			};
    return {
      // Do something awesome
      getSocial: function() {
      	return configs.social;
      },
      getQuestions: function() {
      	return configs.questions;
      },
      getProducts: function() {
      	return configs.products;
      },
      getProductInfo: function(prodId) {
      	var results = configs.products;
      	var i;
      	for (i = 0; i < 3; i++) {
      		return i;
      	}
      	
      }
    };
  };
