const data = [
  {
    title: "Work",
    timeframes: {
      daily: {
        current: 5,
        previous: 7,
      },
      weekly: {
        current: 32,
        previous: 36,
      },
      monthly: {
        current: 103,
        previous: 128,
      },
    },
  },
  {
    title: "Play",
    timeframes: {
      daily: {
        current: 1,
        previous: 2,
      },
      weekly: {
        current: 10,
        previous: 8,
      },
      monthly: {
        current: 23,
        previous: 29,
      },
    },
  },
  {
    title: "Study",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 7,
      },
      monthly: {
        current: 13,
        previous: 19,
      },
    },
  },
  {
    title: "Exercise",
    timeframes: {
      daily: {
        current: 1,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 5,
      },
      monthly: {
        current: 11,
        previous: 18,
      },
    },
  },
  {
    title: "Social",
    timeframes: {
      daily: {
        current: 1,
        previous: 3,
      },
      weekly: {
        current: 5,
        previous: 10,
      },
      monthly: {
        current: 21,
        previous: 23,
      },
    },
  },
  {
    title: "Self Care",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 2,
        previous: 2,
      },
      monthly: {
        current: 7,
        previous: 11,
      },
    },
  },
];

// set button
const option = document.querySelectorAll('.user__options button')

// eventlistener
option.forEach((item, index) => {
  item.addEventListener('click', () => {
    if(index === 0) {
      setDaily()
    } else if (index === 1) {
      setWeekly()
    } else {
      setMonthly()
    }
  })
})

// set daily
function setDaily() {
  // work
  const currentWork = document.querySelector(".work-current");
  const previousWork = document.querySelector(".work-previous");

  currentWork.textContent = data[0].timeframes.daily.current + "hrs";
  previousWork.textContent = data[0].timeframes.daily.previous + "hrs";

  // play
  const currentPlay = document.querySelector(".play-current");
  const previousPlay = document.querySelector(".play-previous");

  currentPlay.textContent = data[1].timeframes.daily.current + "hrs";
  previousPlay.textContent = data[1].timeframes.daily.previous + "hrs";

  // study
  const currentStudy = document.querySelector(".study-current");
  const previousStudy = document.querySelector(".study-previous");

  currentStudy.textContent = data[2].timeframes.daily.current + "hrs";
  previousStudy.textContent = data[2].timeframes.daily.previous + "hrs";

  // exercise
  const currentExercise = document.querySelector(".exercise-current");
  const previousExercise = document.querySelector(".exercise-previous");

  currentExercise.textContent = data[3].timeframes.daily.current + "hrs";
  previousExercise.textContent = data[3].timeframes.daily.previous + "hrs";

  // social
  const currentSocial = document.querySelector(".social-current");
  const previousSocial = document.querySelector(".social-previous");

  currentSocial.textContent = data[4].timeframes.daily.current + "hrs";
  previousSocial.textContent = data[4].timeframes.daily.previous + "hrs";

  // selfcare
  const currentSelfCare = document.querySelector(".selfcare-current");
  const previousSelfCare = document.querySelector(".selfcare-previous");

  currentSelfCare.textContent = data[5].timeframes.daily.current + "hrs";
  previousSelfCare.textContent = data[5].timeframes.daily.previous + "hrs";
}

// set weekly
function setWeekly() {
  // work
  const currentWork = document.querySelector(".work-current");
  const previousWork = document.querySelector(".work-previous");
  currentWork.textContent = data[0].timeframes.weekly.current + "hrs";
  previousWork.textContent = data[0].timeframes.weekly.previous + "hrs";

  // play
  const currentPlay = document.querySelector(".play-current");
  const previousPlay = document.querySelector(".play-previous");

  currentPlay.textContent = data[1].timeframes.weekly.current + "hrs";
  previousPlay.textContent = data[1].timeframes.weekly.previous + "hrs";

  // study
  const currentStudy = document.querySelector(".study-current");
  const previousStudy = document.querySelector(".study-previous");

  currentStudy.textContent = data[2].timeframes.weekly.current + "hrs";
  previousStudy.textContent = data[2].timeframes.weekly.previous + "hrs";

  // exercise
  const currentExercise = document.querySelector(".exercise-current");
  const previousExercise = document.querySelector(".exercise-previous");

  currentExercise.textContent = data[3].timeframes.weekly.current + "hrs";
  previousExercise.textContent = data[3].timeframes.weekly.previous + "hrs";

  // social
  const currentSocial = document.querySelector(".social-current");
  const previousSocial = document.querySelector(".social-previous");

  currentSocial.textContent = data[4].timeframes.weekly.current + "hrs";
  previousSocial.textContent = data[4].timeframes.weekly.previous + "hrs";

  // selfcare
  const currentSelfCare = document.querySelector(".selfcare-current");
  const previousSelfCare = document.querySelector(".selfcare-previous");

  currentSelfCare.textContent = data[5].timeframes.weekly.current + "hrs";
  previousSelfCare.textContent = data[5].timeframes.weekly.previous + "hrs";
}

function setMonthly() {
  const currentWork = document.querySelector(".work-current");
  const previousWork = document.querySelector(".work-previous");
  const currentPlay = document.querySelector(".play-current");
  const previousPlay = document.querySelector(".play-previous");

  currentWork.textContent = data[0].timeframes.monthly.current + "hrs";
  previousWork.textContent = data[0].timeframes.monthly.previous + "hrs";
  currentPlay.textContent = data[1].timeframes.monthly.current + "hrs";
  previousPlay.textContent = data[1].timeframes.monthly.previous + "hrs";

  // study
  const currentStudy = document.querySelector(".study-current");
  const previousStudy = document.querySelector(".study-previous");

  currentStudy.textContent = data[2].timeframes.monthly.current + "hrs";
  previousStudy.textContent = data[2].timeframes.monthly.previous + "hrs";

  // exercise
  const currentExercise = document.querySelector(".exercise-current");
  const previousExercise = document.querySelector(".exercise-previous");

  currentExercise.textContent = data[3].timeframes.monthly.current + "hrs";
  previousExercise.textContent = data[3].timeframes.monthly.previous + "hrs";

  // social
  const currentSocial = document.querySelector(".social-current");
  const previousSocial = document.querySelector(".social-previous");

  currentSocial.textContent = data[4].timeframes.monthly.current + "hrs";
  previousSocial.textContent = data[4].timeframes.monthly.previous + "hrs";

  // selfcare
  const currentSelfCare = document.querySelector(".selfcare-current");
  const previousSelfCare = document.querySelector(".selfcare-previous");

  currentSelfCare.textContent = data[5].timeframes.monthly.current + "hrs";
  previousSelfCare.textContent = data[5].timeframes.monthly.previous + "hrs";
}