export function getTopicIcon(num) { 
    switch (num) {
        case 9:
          return '<i class="ri-file-unknow-line"></i>';
        case 10:
          return '<i class="ri-book-2-line"></i>';
        case 11:
          return '<i class="ri-movie-2-line"></i>';
        case 12:
          return '<i class="ri-headphone-line"></i>';
        case 13:
          return '<i class="ri-music-2-line"></i>';
        case 14:
          return '<i class="ri-tv-line"></i>';
        case 15:
          return '<i class="ri-gamepad-line"></i>';
        case 16:
          return '<i class="ri-hand-coin-line"></i>';
        case 17:
          return '<i class="ri-aliens-line"></i>';
        case 18:
          return '<i class="ri-terminal-box-line"></i>';
        case 19:
          return '<i class="ri-braces-line"></i>';
        case 20:
          return '<i class="ri-auction-line"></i>';
        case 21:
          return '<i class="ri-basketball-line"></i>';
        case 23:
          return '<i class="ri-ancient-gate-line"></i>';
        case 24:
          return '<i class="ri-government-line"></i>';
        case 25:
          return '<i class="ri-paint-fill"></i>';
        case 26:
          return '<i class="ri-star-line"></i>';
        case 27:
          return '<i class="ri-android-line"></i>';
        case 28:
          return '<i class="ri-roadster-line"></i>'
        case 29:
          return '<i class="ri-book-read-fill"></i>';
        case 30:
          return '<i class="ri-tools-line"></i>';
        case 31:
          return '<i class="ri-translate-2"></i>';
        case 32:
          return '<i class="ri-mickey-line"></i>';
        default:
          return '<i class="ri-information-line"></i>';
      }
}

export function getTopicName(num) {
  switch (num) {
    case 9:
      return "General Knowledge";
    case 10:
      return "Books";
    case 11:
      return "Film";
    case 12:
      return "Music";
    case 13:
      return "Musicals & Theatres";
    case 14:
      return "Television";
    case 15:
      return "Video Games";
    case 16:
      return "Board Games";
    case 17:
      return "Science & Nature";
    case 18:
      return "Computers";
    case 19:
      return "Mathematics";
    case 20:
      return "Mythology";
    case 21:
      return "Sports";
    case 23:
      return "History";
    case 24:
      return "Politics";
    case 25:
      return "Art";
    case 26:
      return "Celebrities";
    case 27:
      return "Animals";
    case 28:
      return "Vehicles";
    case 29:
      return "Comics";
    case 30:
      return "Science: Gadgets";
    case 31:
      return "Japanese Anime & Manga";
    case 32:
      return "Cartoon & Animations";
    default:
      return "Any";
  }
}
