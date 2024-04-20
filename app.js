// wl stands for wishlist
const wlContainer = document.getElementById("wishlist-container");
const trailsContainer = document.getElementById("trails-container");
const districtSummaryContainer = document.getElementById("district-summary-container");
const trailCardContainer = document.getElementById("trail-card-container");
const wlBtn = document.getElementById("wishlist-btn");
const clearWlBtn = document.getElementById("clear-wishlist-btn");
const filterHikingTrailsBtn = document.getElementById("filter-hiking-trails");
const filterWalkingTrailsBtn = document.getElementById("filter-walking-trails");
const totalNumberOfTrails = document.getElementById("total-trails");
const showHideWlSpan = document.getElementById("show-hide-wishlist");
let isWlShowing = false

const trails = [
  {
    id: 1,
    name: "Yongma Mountain",
    district: "Jungnang-gu",
    type: "hiking",
  },
  {
    id: 2,
    name: "Mangusan Mountain",
    district: "Jungnang-gu",
    type: "hiking",
  },
  {
    id: 3,
    name: "Achasan Mountain",
    district: "Jungnang-gu",
    type: "hiking",
  },
  {
    id: 4,
    name: "Mangusan",
    district: "Jungnang-gu",
    type: "hiking",
  },
  {
    id: 5,
    name: "Buramsan Mountain",
    district: "Nowon-gu",
    type: "hiking",
  },
  {
    id: 6,
    name: "Suraksan Mountain",
    district: "Nowon-gu",
    type: "hiking",
  },
  {
    id: 7,
    name: "Baebongsan Mountain",
    district: "Dongdeamun-gu",
    type: "hiking",
  },
  {
    id: 8,
    name: "Dobongsan Mountain",
    district: "Dobong-gu",
    type: "hiking",
  },
  {
    id: 9,
    name: "Bukhansan Mountain",
    district: "Gangbuk-gu",
    type: "hiking",
  },
  {
    id: 10,
    name: "Bugaksan Mountain",
    district: "Jongno-gu",
    type: "hiking",
  },
  {
    id: 11,
    name: "Inwangsan Mountain",
    district: "Jongno-gu",
    type: "hiking",
  },
  {
    id: 12,
    name: "Namsan Mountain",
    district: "Jung-gu",
    type: "hiking",
  },
  {
    id: 13,
    name: "Bongsan Mountain",
    district: "Eunpyeong-gu",
    type: "hiking",
  },
  {
    id: 14,
    name: "Test Walking Trail",
    district: "Jungnang-gu",
    type: "walking",
  },
];

// function to create a trail card HTML
function createTrailCard({id, name, district}) {
  return `
  <div class="trail-card">
    <h2>${name}</h2>
    <p class="trail-district">District: ${district}</p>
    <button id="${id}" class="btn add-to-wishlist-btn">Add to wishlist</button>
  </div>
  `;
};

// display all trails 
trails.forEach((trail) => {
  trailCardContainer.innerHTML += createTrailCard(trail)
});

// function to you filter and display trails based on the selected type
function filterTrails(type) {
  // clear the existing trail card container
  trailCardContainer.innerHTML = ""

  trails
  .filter((trail) => trail.type === type )
  .forEach((filteredTrail) => {
    trailCardContainer.innerHTML += createTrailCard(filteredTrail)
  })
};


class HikingWishlist {
  constructor() {
    this.items = [];
  }

  addItem(id, trails) {
    const trail = trails.find((item) => item.id === id);
    const {name, district} = trail;
    
    // check if a trail is already in the wishlist
    if(!this.items.includes(trail)) {
      this.items.push(trail);
      trailsContainer.innerHTML += `
        <div>
          <p>${name}</p>
          <p>${district}</p>
        </div>
        `;   
    } else {
      alert("this trail is already in the wishlist");
      return
    }

    const totalTrailsPerDistrict = {};
    this.items.forEach((mountain) => {
      totalTrailsPerDistrict[mountain.district] = (totalTrailsPerDistrict[mountain.district] || 0) + 1;
    })

    const currentTrailCountPerDistrict = totalTrailsPerDistrict[trail.district]
    const currentTrailCountPerDistrictSpan = document.getElementById(`trail-count-for-district${district}`);

    currentTrailCountPerDistrict > 1 ? currentTrailCountPerDistrictSpan.textContent = `${currentTrailCountPerDistrict} trails` : districtSummaryContainer.innerHTML += `
      <div>
        <p>
          <span id="trail-count-for-district${district}">1 trail</span> in ${district}
        </p>
      </div>
    `;


  }

  getCounts() {
    return this.items.length
  }

  clearWishlist() {
    if(!this.items.length) {
      alert("Your wishlist is already empty");
      return
    };

    const isWishlistCleared = confirm("Are you sure you want to clear all items?");

    if(isWishlistCleared) {
      this.items = [];
      trailsContainer.innerHTML = "";
      districtSummaryContainer.innerHTML = "";
      totalNumberOfTrails.textContent = 0;
    }
  }
};

const wishlist = new HikingWishlist();
const addToWishlistBtns = document.getElementsByClassName("add-to-wishlist-btn");

const listenAllAddToWlBtnAndUpdateWl = () => {
  [...addToWishlistBtns].forEach((btn) => {
    btn.addEventListener("click", (event) => {
      wishlist.addItem(Number(event.target.id), trails);
      totalNumberOfTrails.textContent = wishlist.getCounts()
    })
  });
}

// listen to all the add-to-wishlist btn and update the wishlist instance when addEventListener is fired, this function is called at once after the index.html is finished loading
listenAllAddToWlBtnAndUpdateWl()

wlBtn.addEventListener("click", () => {
  // reset the boolean value (i.e. true to false or false to true)
  isWlShowing = !isWlShowing;
  showHideWlSpan.textContent = isWlShowing ? "Hide" : "Show";
  wlContainer.style.display = isWlShowing ? "block" : "none";
});

clearWlBtn.addEventListener("click", wishlist.clearWishlist.bind(wishlist));

// filter hiking trails
filterHikingTrailsBtn.addEventListener("click", () => {
  filterTrails("hiking");
  // re-listen all add-to-wishlist btn as the trail-card-container is cleared to empty after filterTrails is called
  listenAllAddToWlBtnAndUpdateWl()
});

// filter walking trails
filterWalkingTrailsBtn.addEventListener("click", () => {
  filterTrails("walking");
  // re-listen all add-to-wishlist btn as the trail-card-container is cleared to empty after filterTrails is called
  listenAllAddToWlBtnAndUpdateWl()
});