import { v4 as uuidv4 } from 'uuid';


const songsList = () =>{
 return [
    {
      name: "Raatan Lambiyan",
      cover:
        "https://a10.gaanacdn.com/gn_img/albums/10q3Zj1352/q3ZR6q4035/size_l.jpg",
      artist: "Jubin Nautiyal, Asees Kaur",
      audio: "https://pagalworld.com.se/files/download/id/3198",
      color: ["#205950", "#2ab3bf"],
      id: uuidv4(),
      active: true,
    },
    {
      name: "Jannat Ve",
      cover:
        "https://a10.gaanacdn.com/gn_img/albums/g4w3vr3jJB/w3vwep1pWj/size_l.jpg",
      artist: "Darshan Raval",
      audio: "https://pagalworld.com.se/files/download/id/3161",
      color: ["#EF8EA9", "#ab417f"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Dil Lauta Do",
      cover:
        "https://img.wynk.in/unsafe/275x275/filters:no_upscale():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/srch_hungama/music/8903431820778/1627372829/srch_hungama_70438510.jpg",
      artist: "Swørn",
      audio: "https://pagalworld.com.se/files/download/id/3136",
      color: ["#CD607D", "#c94043"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Thoda Thoda Pyaar",
      cover:
        "https://a10.gaanacdn.com/gn_img/albums/w4MKPDOKoj/MKPggoBAbo/size_l.jpg",
      artist: "Stebin Ben",
      audio: "https://pagalworld.com.se/files/download/id/3183",
      color: ["#EF8EA9", "#ab417f"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Reflection",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",
      artist: "Swørn",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9228",
      color: ["#CD607D", "#c94043"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Under the City Stars",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
      artist: "Aso, Middle School, Aviino",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10074",
      color: ["#205950", "#2ab3bf"],
      id: uuidv4(),
      active: false,
    },
    //ADD MORE HERE
  ]
}

export default songsList