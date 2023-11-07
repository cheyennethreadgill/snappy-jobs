import jobs from '/src/jobs.js';
import cats from '/src/categories.js';

const jobsContainer = document.querySelector('.jobs-container');
const categoriesContainer = document.querySelector('.categories-container');


// *********************ANIMATIONS********************************


// -------------------------------SHOW JOBS ON LOAD
window.addEventListener(
  'DOMContentLoaded',
  () => {
    Jobs();

    const categories = cats
      .map((cat) => {
        const {name, specs} = cat;

        const spec = specs
          .map((item) => {
            return `
              <button
                type="button"
                class="category-btn"
                value=${item}
                >${item}</button
              >
        `;
          })
          .join('');

        return `
          <div class="category">
            <h3>${name}</h3>
            <div class="spec"> 
              ${spec} 
            </div>
          </div>
      `;
      })
      .join('');

    categoriesContainer.innerHTML = categories;
    const categoryButtons = document.querySelectorAll('.category-btn');

    categoryButtons.forEach((btn) => {
      btn.addEventListener(
        'click',
        (e) => {
          filterJobs(e.target.value);
          appendTags(e.target.value);
        },
        false
      );
    });
  },
  false
);

// ------------------------------------------------------------create single job

function Jobs() {
  let jobsMap = jobs.map((job) => {
    const {
      company,
      logo,
      isNew,
      featured,
      position,
      postedAt,
      contract,
      location,
      languages,
      tools,
    } = job;

    return `
    
      <div class='job-container'>
      <span class="swipe-right-overlay"> </span>
        <div class='job'>
        
        <img src="${logo}" alt='${company}' class="job-img">
        
        <div class='job-info'>
          <div class='h-div'> 
            <h3 class='job-title'> ${company} </h3>
             ${isNew === true ? `<p class="new"> NEW  </p>` : ''} 
            ${featured === true ? `<p class="featured">  FEATURED  </p> ` : ''} 
          </div>

          <h2> ${position} </h2> 
          
          <div class='job-info_stats'>
            <p> ${postedAt} </p>
            <p> ${contract} </p>
            <p> ${location} </p>
          </div>
        </div>

        <hr>

          <div class='tags'> 
            ${tools
              .map((tool) => {
                return `<button  class="job-tag"
              value='${tool}'> ${tool} </button>`;
              })
              .join('')}
            
            ${languages
              .map((language) => {
                return `<button class="job-tag"
              value='${language}'> ${language} </button>`;
              })
              .join('')}
          </div>
        </div>
      </div>
      `;
  });

  jobsMap = jobsMap.join('');
  jobsContainer.innerHTML = jobsMap;

  (function swipeRight() {
    let jobContainer = document.querySelector('.job-container');

    jobContainer.addEventListener('mouseenter', animateOverlay, false);
    function animateOverlay() {
      jobContainer;
    }
  })();
}

// filter jobs
var filteredCategoryArray = [];
function filterJobs(value) {
  // filter roles
  filteredCategoryArray = jobs.filter((job) => {
    const {role, level, languages, tools} = job;
    // returns array item if the item meets criteria

    if (value == role) {
      return value == role;
    }
    if (value == level) {
      return value == level;
    }
    if (value == languages) {
      return value == languages;
    }
    if (value == tools) {
      return value == tools;
    }
  });
  ShowFilteredJobs(filteredCategoryArray);
}

// ---------------------------------------------------------------SHOW JOBS

function ShowFilteredJobs(filteredCategoryArray) {
  let jobsMap = filteredCategoryArray.map((job) => {
    const {
      company,
      logo,
      isNew,
      featured,
      position,
      postedAt,
      contract,
      location,
      languages,
      tools,
    } = job;

    return `
    
      <div class='job-container'>
        <div class='job'>
        
        <img src="${logo}" alt='${company}'>
        
        <div class='job-info'>
          <div class='h-div'> 
            <h3 class='job-title'> ${company} </h3>
             ${isNew === true ? `<p class="new"> NEW  </p>` : ''} 
            ${featured === true ? `<p class="featured">  FEATURED  </p> ` : ''} 
          </div>

          <h2> ${position} </h2> 
          
          <div class='job-info_stats'>
            <p> ${postedAt} </p>
            <p> ${contract} </p>
            <p> ${location} </p>
          </div>
        </div>

          <div class='tags'> 
            ${tools
              .map((tool) => {
                return `<button  class="job-tag"
              value='${tool}'> ${tool} </button>`;
              })
              .join('')}
            
            ${languages
              .map((language) => {
                return `<button class="job-tag"
              value='${language}'> ${language} </button>`;
              })
              .join('')}
          </div>
        </div>
      </div>
      `;
  });
  jobsMap = jobsMap.join('');
  jobsContainer.innerHTML = jobsMap;
}
