$(".sl").slick();

$('#form').validate();
$('#email').validate();

// $('#form').ready() {
//   $('#form').validate([
//     name: {
//       required: true,
//       minlength: 2
//     },
//     email: {
//       required: true,
//       email: true
//     },
//     object: {
//       required: true,
//       minlength: 2
//     },
//     messages: {
//       name: {
//         required: "Please enter your NAME",
//         minlength: "Please enter your NAME"
//       },
//       email: {
//         required: "Please enter your EMAIL",
//         minlength: "Please enter your EMAIL"
//       }.  
//     }
//   ]);
// }






// requirejs.config({
//   baseUrl: "js",
//   path: {
//     bootstrap: "/node_modules/bootstrap/dist/js/bootstrap.min",
//     jquery: "/node_modules/jquery/dist/jquery.min",
//     validation: "/node_modules/jquery-validation/dist/jquery.validate.min"
//   },
//   shim: {
//     validation: {
//       deps: ["jquery"],
//       exports: "jQuery"
//     }
//   }
// });
// requirejs(["src/scripts/home.viewmodels", "ko"], function(vm, ko) {
//   vm.init();
//   ko.applyBindings(vm);
// });
