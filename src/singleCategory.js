// import categories from '/src/categories.js';

// const body = document.querySelector('body');

// const categoriesContainer = document.createElement('div');
// categoriesContainer.setAttribute('class', 'categories-container');

// body.append(categoriesContainer);

// //  --------------------------------------------------------create single category
// function SingleCategory(name, id) {
//   this.name = name;
//   this.id = id;

//   // create container for role
//   // create roles container
//   const container = document.createElement('div');
//   container.setAttribute('class', `category-container`);
//   categoriesContainer.appendChild(container);

//   // label container
//   var thisLabelContainer = document.createElement('div');
//   thisLabelContainer.setAttribute('class', `${name}-label-container`);

//   // Label container
//   var thisLabel = document.createElement('h2');
//   thisLabel.setAttribute('class', `${name}-label`);
//   thisLabel.innerHTML = `${name}`;
//   thisLabelContainer.appendChild(thisLabel);

//   // role.list container
//   var thisFilterList = document.createElement('ul');
//   thisFilterList.setAttribute('class', 'category-list');

//   this.categoryArray = function () {
//     categories[this.id][`${this.name}`].map((category) => {
//       const li = document.createElement('li');
//       const categoryButton = document.createElement('button');

//       categoryButton.setAttribute('type', 'submit');
//       categoryButton.setAttribute('class', 'category-btn');
//       categoryButton.setAttribute('value', `${category}`);
//       categoryButton.innerHTML = category;

//       li.appendChild(categoryButton);
//       thisFilterList.appendChild(li);

//       // -------------------------------------------------------TAGS
//       // TODO want to add filtered tags to an array to
//       //  remove items if needed

//       const tagsDiv = document.createElement('div');
//       categoriesContainer.appendChild(tagsDiv);

//       const tagButton = document.createElement('button');
//       tagButton.setAttribute('class', 'tag-button');
//       tagButton.addEventListener('click', removeTags, false);
//       tagButton.addEventListener('click', filterJobs, false);

//       function appendTags(value) {
//         // filter
//         tag = categories[id][name].filter((cat) => {
//           if (value == cat) {
//             return value == cat;
//           }
//         });

//         tagsArray.push(tag);
//         displayTagButton(tag);
//         console.log(tagsArray);

//         isPresent = true;
//       }

//       function removeTags(tag) {
//         if (isPresent) {
//           tagsArray.pop(tag);
//           undoTagButton(tag);
//           console.log(tagsArray);
//         }
//         isPresent = false;
//       }

//       function displayTagButton(category) {
//         tagButton.innerHTML = category;
//         tagsDiv.appendChild(tagButton);
//       }

//       function undoTagButton(category) {
//         tagButton.innerHTML = category;
//         tagsDiv.removeChild(tagButton);
//       }

//       categoryButton.addEventListener(
//         'click',
//         (e) => {
//           filterJobs(e.target.value);
//           appendTags(e.target.value);
//           console.log(e.target.value);
//         },
//         false
//       );
//     });
//   };

//   container.appendChild(thisFilterList);
//   container.appendChild(thisLabelContainer);
// }

// // --------------------------------------------------------create new categories
// (function showCategories() {
//     categories.map((category) => {
//       let {name, id} = category;
  
//       name = new SingleCategory(`${name}`, `${id}`);
//       name.categoryArray();
//     });
//   })();

// export default SingleCategory;
