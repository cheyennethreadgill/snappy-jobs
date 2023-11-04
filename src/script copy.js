import jobs from '/src/jobs.js';
import categories from '/src/categories.js';
const body = document.querySelector('body');

const categoriesContainer = document.createElement('div');
categoriesContainer.setAttribute('class', 'categories-container');

const jobSection = document.createElement('section');
jobSection.setAttribute('class', 'job-section');

body.append(categoriesContainer);
body.append(jobSection);

// ----------------- filter jobs

//  --------------------------------------------------------create single category
function SingleCategory(name, id) {
  this.name = name;
  this.id = id;

  // create container for role
  // create roles container
  const container = document.createElement('div');
  container.setAttribute('class', `category-container`);
  categoriesContainer.appendChild(container);

  // label container
  var thisLabelContainer = document.createElement('div');
  thisLabelContainer.setAttribute('class', `${name}-label-container`);

  // Label container
  var thisLabel = document.createElement('h2');
  thisLabel.setAttribute('class', `${name}-label`);
  thisLabel.innerHTML = `${name}`;
  thisLabelContainer.appendChild(thisLabel);

  // role.list container
  var thisFilterList = document.createElement('ul');
  thisFilterList.setAttribute('class', 'category-list');

  this.categoryArray = function () {
    categories[this.id][`${this.name}`].map((category) => {
      const li = document.createElement('li');
      const categoryButton = document.createElement('button');

      categoryButton.setAttribute('type', 'submit');
      categoryButton.setAttribute('class', 'category-btn');
      categoryButton.setAttribute('value', `${category}`);
      categoryButton.innerHTML = category;

      li.appendChild(categoryButton);
      thisFilterList.appendChild(li);

      // filter tags
      function appendTags(value) {
        categories[id][name].filter((cat) => {
          if (value === cat) {
            return cat === value;
          }
        });
        displayTags(category);
        console.log(category);
      }

      const tagsDiv = document.createElement('div');
      categoriesContainer.appendChild(tagsDiv);
      function displayTags(category) {
        tagsDiv.innerHTML = `<p> ${category} </p>`;
      }

      categoryButton.addEventListener(
        'click',
        (e) => {
          filterJobs(e.target.value);
          appendTags(e.target.value);
        },
        false
      );
    });
  };

  container.appendChild(thisFilterList);
  container.appendChild(thisLabelContainer);
}
// --------------------------------------------------------create new categories
(function showCategories() {
  categories.map((category) => {
    let {name, id} = category;

    name = new SingleCategory(`${name}`, `${id}`);
    name.categoryArray();
  });
})();

// ------------------------------------------------------------create single job
function SingleJob(
  id,
  company,
  logo,
  position,
  role,
  level,
  postedAt,
  contract,
  location,
  languages,
  tools
) {
  this.id = id;
  this.company = company;
  this.logo = logo;
  this.position = position;
  this.role = role;
  this.level = level;
  this.postedAt = postedAt;
  this.contract = contract;
  this.location = location;
  this.languages = languages;
  this.tools = tools;

  // map
  // this.jobDisplay = function () {
  //   const jobContainer = document.createElement('div');
  //   jobContainer.setAttribute('class', 'job-container');

  //   let splitLanguages = this.languages.split(',');

  //   let content = `
  //   <p class='job-title'> ${this.company} </p>
  //   <h2> ${this.position} </h2>
  //   <p> ${this.postedAt} </p>
  //   <p> ${this.level} </p>
  //   <p> ${this.role} </p>
  //   <div class='tags'>

  //   ${splitLanguages.map((language) => {
  //     return `<button onclick="console.log(this.value)"
  //           value='${language}'> ${language} </button>`;
  //   })}
  //         </div>
  //     `;

  //   jobSection.append(jobContainer);
  //   jobContainer.innerHTML = content;
  // };
}

// create separate method in constructor that maps over
//  languages of each job, returns an array,

// -------------------------------------------------------------------create new job
// filter jobs
var filteredJobsArray = [];

function filterJobs(value) {
  // set empty filter array to returned jobs
  filteredJobsArray = jobs.filter((job) => {
    // returns array item if  the item meets criteria
    if (value === job.role) return value === job.role;
  });

  createNewJob(filteredJobsArray);
  console.log(filteredJobsArray);
}

const jobContainer = document.createElement('div');
jobContainer.setAttribute('class', 'job-container');
jobSection.append(jobContainer);

function createNewJob(filteredJobsArray) {
  console.log(
    `filtered length inside of new job func: ${filteredJobsArray.length}`
  );

  jobContainer.innerHTML = filteredJobsArray.map((job) => {
    const {company, position, role, level, postedAt, languages} = job;

    return `
        <p class='job-title'> ${company} </p>
        <h2> ${position} </h2>
        <p> ${postedAt} </p>
        <p> ${level} </p>
        <p> ${role} </p>
        <div class='tags'> 
        
        ${languages.map((language) => {
          return `<button onclick="console.log(this.value)"
          value='${language}'> ${language} </button>`;
        })}
      `;
  });
}

// ************************WRONG BELOW******************
// BELOW WAS CREATING AND APPENDING A NEW ELEMENT EVERYTIME FN WAS CALLED BECAUSE OF THE APPEND METHOD AT THE END
//    WAS SUPPOSED TO RETURN HTML, NOT APPEND THE OONTAINER

// function createNewJob(filteredJobsArray) {
//   console.log(
//     `filtered length inside of new job func: ${filteredJobsArray.length}`
//   );

//   filteredJobsArray.map((job) => {

//     const {
//       company,
//       position,
//       role,
//       level,
//       postedAt,
//       languages,
//     } = job;

//     const jobContainer = document.createElement('div');
//     jobContainer.setAttribute('class', 'job-container');

//     let content = `
//       <p class='job-title'> ${company} </p>
//       <h2> ${position} </h2>
//       <p> ${postedAt} </p>
//       <p> ${level} </p>
//       <p> ${role} </p>
//       <div class='tags'>

//       ${languages.map((language) => {
//         return `<button onclick="console.log(this.value)"
//               value='${language}'> ${language} </button>`;
//       })}
//             </div>
//         `;

//     jobSection.append(jobContainer);
//     jobContainer.innerHTML = content;
//   });
// }
