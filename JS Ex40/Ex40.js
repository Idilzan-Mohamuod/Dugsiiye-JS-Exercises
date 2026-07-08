
const videoElement = document.getElementById("video");

// 2. Select DOM elements
const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const fullscreenBtn = document.getElementById("fullscreen"); // New
const title = document.getElementById("title");
const currentTimeEl = document.getElementById("current-time");
const durationEl = document.getElementById("duration");
const progress = document.querySelector(".progress");
const progressContainer = document.querySelector(".progress-bar");
const volumeSlider = document.getElementById("volume");
const speedSelect = document.getElementById("speed");

// Videos data
const videos = [
  
  {title:'Surah Verse',
    src:'./Surah.mp4',
},
    

   {title: "The  Elevation Seed",
    src: "./Inspirational.mp4",
  }
];

let videoIndex = 0;
let isPlaying = false;
let speed = 1;

function loadVideo(video) {
  title.textContent = video.title;
  videoElement.src = video.src;
}

loadVideo(videos[videoIndex]);

// Play/Pause Functions
function playVideo() {
  playBtn.querySelector("i").classList.remove("fa-play");
  playBtn.querySelector("i").classList.add("fa-pause");
  videoElement.play();
  isPlaying = true;
}

function pauseVideo() {
  playBtn.querySelector("i").classList.remove("fa-pause");
  playBtn.querySelector("i").classList.add("fa-play");
  videoElement.pause();
  isPlaying = false;
}

// Fullscreen functionality
function toggleFullscreen() {
    if (videoElement.requestFullscreen) {
        videoElement.requestFullscreen();
    }
}

// Navigation
function nextVideo() {
  videoIndex++;
  if (videoIndex > videos.length - 1) videoIndex = 0;
  loadVideo(videos[videoIndex]);
  playVideo();
}

function prevVideo() {
  videoIndex--;
  if (videoIndex < 0) videoIndex = videos.length - 1;
  loadVideo(videos[videoIndex]);
  playVideo();
}

// Update progress bar
function updateProgress(e) {
  const { duration, currentTime } = e.target;
  if (isNaN(duration)) return;
  
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;

  // Formatting time logic remains the same
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
  };

  currentTimeEl.textContent = formatTime(currentTime);
  durationEl.textContent = formatTime(duration);
}

function setProgress(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  videoElement.currentTime = (clickX / width) * videoElement.duration;
}

// Event Listeners
playBtn.addEventListener("click", () => isPlaying ? pauseVideo() : playVideo());
nextBtn.addEventListener("click", nextVideo);
prevBtn.addEventListener("click", prevVideo);
fullscreenBtn.addEventListener("click", toggleFullscreen);

videoElement.addEventListener("timeupdate", updateProgress);
videoElement.addEventListener("loadedmetadata", updateProgress);
progressContainer.addEventListener('click', setProgress);

volumeSlider.addEventListener('input', (e) => videoElement.volume = e.target.value);
speedSelect.addEventListener('change', (e) => {
  speed = parseFloat(e.target.value);
  videoElement.playbackRate = speed;
});