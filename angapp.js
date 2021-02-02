

var app = angular.module('freshkick',['ngCookies']); //modules defines an app - container for parts of application


//A controller always belongs to module
app.controller('freshCtrl', function($scope){
    $scope.name2="yousuf2";
    $scope.cart = [];
    $scope.total = 0;

  

    if(!$scope.name){
        $scope.name = "default";
    }

    person = {
        firstName: $scope.name,
        lastName: "yousuf"
    }

    changeName = (person) => {
        person.lastName = "Ali";
    }

      

    //cart logic

    addCart = (product) => {
        
        if($scope.cart.length === 0){
            $scope.cart.push(product);
            $scope.total += parseFloat(product.price);
            product.count=1;
        }
        else{
            repeat = false;
        for (let i = 0; i < $scope.cart.length; i++) {
           if(product.id == $scope.cart[i].id){
               $scope.cart[i].count+=1;
               $scope.total += parseFloat(product.price);
               repeat = true;
           }
        }
        if(!repeat){
            $scope.cart.push(product);
            product.count=1;
            $scope.total += parseFloat(product.price);
            repeat=false;
            }
    }
    }
        
   $scope.addCart = addCart;

   



    $scope.person = person;
    $scope.changeName = changeName;

    $scope.products =  [{
        id: 1,
        name: 'Air Jordan VII',
        price: 799,
        description: 'The MJ Dreams',
        img: 'https://c.static-nike.com/a/images/t_prod_ss/w_480,c_limit,q_auto,f_auto/t4ege635ov8rjpccsrj7/air-jordan-7-retro-black-gloss-release-date.jpg'
      },
      {
        id: 2,
        name: 'Adidas x Cole',
        price: 699,
        description: 'Three stripes with Goat Cole',
        img:'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_1750,h_1750/global/194849/02/sv01/fnd/PNA/fmt/png/DREAMER-2-Basketball-Shoes'
      },
      {
        id: 3,
        name: 'Nike Nocota',
        price: 299,
        description: 'The New Drake Brand You Need',
        img: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/w_640,c_limit/9ddec29d-ea6e-462e-8d47-2799fce0baa6/nocta-apparel-collection-release-date.jpg'
      }];
    
});

app.directive("w3TestDirective", function() {
    return {
      template : "I was made in a directive constructor!"
    };
  });

