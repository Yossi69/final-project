const { Song, Playlist } = require('./classes.js');

/**
 * Retrieves a list of songs from the Genius API based on a search query
 *
 * @param {string} query - The search query for songs
 * @returns {Promise<Array>} - A Promise that resolves to an array of unique songs matching the search query
 */
async function getSongsList(query) {
  // Encode the search query to include special characters
  const encodedName = encodeURIComponent(query);

  // Construct the URL to call the Genius API search endpoint
  const url = `https://genius.com/api/search/songs?q=${encodedName}&limit=10`;

  // Call the Genius API search endpoint and get the response as JSON
  //const response = await fetch(url);
  const jsonResponse = JSON.parse(
    `{ "meta": { "status": 200 }, "response": { "sections": [ { "type": "song", "hits": [ { "highlights": [], "index": "song", "type": "song", "result": { "_type": "song", "annotation_count": 26, "api_path": "/songs/299177", "artist_names": "Beyoncé (Ft. JAY-Z)", "full_title": "Drunk in Love by Beyoncé (Ft. JAY-Z)", "lyrics_state": "complete", "lyrics_updated_at": 1657350739, "path": "/Beyonce-drunk-in-love-lyrics", "pyongs_count": 3240, "relationships_index_url": "https://genius.com/Beyonce-drunk-in-love-sample", "release_date_components": { "year": 2013, "month": 12, "day": 17 }, "release_date_for_display": "December 17, 2013", "release_date_with_abbreviated_month_for_display": "Dec. 17, 2013", "song_art_image_thumbnail_url": "https://images.genius.com/8b5bfe335567fc7673d46ccf72176b2c.300x300x1.png", "song_art_image_url": "https://images.genius.com/8b5bfe335567fc7673d46ccf72176b2c.800x800x1.png", "stats": { "unreviewed_annotations": 0, "hot": false, "pageviews": 8492135 }, "title": "Drunk in Love", "title_with_featured": "Drunk in Love (Ft. JAY-Z)", "updated_by_human_at": 1659660478, "url": "https://genius.com/Beyonce-drunk-in-love-lyrics", "featured_artists": [ { "_type": "artist", "api_path": "/artists/2", "header_image_url": "https://images.genius.com/57f67753a0fe8ce5ff4a2ab903fbe850.500x301x1.png", "id": 2, "image_url": "https://images.genius.com/dab4680bbb0569024ef3df3d1e87c277.570x570x1.jpg", "index_character": "j", "is_meme_verified": true, "is_verified": true, "name": "JAY-Z", "slug": "Jay-z", "url": "https://genius.com/artists/Jay-z", "iq": 225 } ], "primary_artist": { "_type": "artist", "api_path": "/artists/498", "header_image_url": "https://images.genius.com/e508c24c5293ad1a9596f91e6ca212d1.1000x572x1.jpg", "id": 498, "image_url": "https://images.genius.com/83fe39f4d98376ba26b27e7c28f0e233.351x351x1.jpg", "index_character": "b", "is_meme_verified": false, "is_verified": false, "name": "Beyoncé", "slug": "Beyonce", "url": "https://genius.com/artists/Beyonce" } } }, { "highlights": [], "index": "song", "type": "song", "result": { "_type": "song", "annotation_count": 28, "api_path": "/songs/2263909", "artist_names": "​gnash (Ft. Olivia O'Brien)", "full_title": "​i​ hate u, i love u by ​gnash (Ft. Olivia O'Brien)", "header_image_thumbnail_url": "https://images.genius.com/3577194e7015b076528d4c9dd0cb8115.300x300x1.jpg", "header_image_url": "https://images.genius.com/3577194e7015b076528d4c9dd0cb8115.1000x1000x1.jpg", "id": 2263909, "instrumental": false, "song_art_image_url": "https://images.genius.com/1a9037bc68df98aaa43721f802946c6e.1000x1000x1.png", "title": "​i​ hate u, i love u", "title_with_featured": "​i​ hate u, i love u (Ft. Olivia O'Brien)", "updated_by_human_at": 1652733547, "url": "https://genius.com/Gnash-i-hate-u-i-love-u-lyrics", "featured_artists": [ { "_type": "artist", "api_path": "/artists/540192", "header_image_url": "https://images.genius.com/afd77fc0fad69f25fa80cf642b1124e6.640x640x1.jpg", "id": 540192, "image_url": "https://images.genius.com/46ce63308d08e978352ed7970d76ebe1.478x478x1.jpg", "index_character": "o", "is_meme_verified": false, "is_verified": true, "name": "Olivia O’Brien", "slug": "Olivia-obrien", "url": "https://genius.com/artists/Olivia-obrien", "iq": 3864 } ], "primary_artist": { "_type": "artist", "api_path": "/artists/48185", "header_image_url": "https://images.genius.com/c5970cf8d80b1adf6e1d6d24bf53f3cc.660x660x1.jpg", "id": 48185, "image_url": "https://images.genius.com/e2b6a7c0df03f490d825b56a9a4e326e.640x640x1.jpg", "index_character": "g", "is_meme_verified": false, "is_verified": true, "name": "​gnash", "slug": "Gnash", "url": "https://genius.com/artists/Gnash", "iq": 11520 } } }, { "highlights": [], "index": "song", "type": "song", "result": { "_type": "song", "annotation_count": 24, "api_path": "/songs/92464", "artist_names": "Chief Keef", "full_title": "Love Sosa by Chief Keef", "header_image_thumbnail_url": "https://images.genius.com/a839d8d4fa6c1b1c00c9b4e2ad37b811.300x169x1.jpg", "header_image_url": "https://images.genius.com/a839d8d4fa6c1b1c00c9b4e2ad37b811.1000x563x1.jpg", "id": 92464, "instrumental": false, "language": "en", "lyrics_owner_id": 468, "lyrics_state": "complete", "lyrics_updated_at": 1672102473, "path": "/Chief-keef-love-sosa-lyrics", "pyongs_count": 385, "relationships_index_url": "https://genius.com/Chief-keef-love-sosa-sample", "release_date_components": { "year": 2012, "month": 10, "day": 18 }, "release_date_for_display": "October 18, 2012", "release_date_with_abbreviated_month_for_display": "Oct. 18, 2012", "song_art_image_thumbnail_url": "https://images.genius.com/45653129f1bada90a3803e0abd3e04e7.300x300x1.png", "song_art_image_url": "https://images.genius.com/45653129f1bada90a3803e0abd3e04e7.800x800x1.png", "stats": { "unreviewed_annotations": 12, "hot": false, "pageviews": 4795368 }, "title": "Love Sosa", "title_with_featured": "Love Sosa", "updated_by_human_at": 1672102473, "url": "https://genius.com/Chief-keef-love-sosa-lyrics", "featured_artists": [], "primary_artist": { "_type": "artist", "api_path": "/artists/16808", "header_image_url": "https://images.genius.com/4021ba198d32951f29a747ea92c3d57f.1000x333x1.jpg", "id": 16808, "image_url": "https://images.genius.com/12592b0da715efe0916dd3645763c64a.999x999x1.jpg", "index_character": "c", "is_meme_verified": true, "is_verified": true, "name": "Chief Keef", "slug": "Chief-keef", "url": "https://genius.com/artists/Chief-keef", "iq": 2434 } } }, { "highlights": [], "index": "song", "type": "song", "result": { "_type": "song", "annotation_count": 5, "api_path": "/songs/3422526", "artist_names": "Billie Eilish & Khalid", "full_title": "​lovely by Billie Eilish & Khalid", "header_image_thumbnail_url": "https://images.genius.com/78d19196547c7db698fe6c01794ea579.300x300x1.jpg", "header_image_url": "https://images.genius.com/78d19196547c7db698fe6c01794ea579.1000x1000x1.jpg", "lyrics_updated_at": 1631058407, "path": "/Billie-eilish-and-khalid-lovely-lyrics", "pyongs_count": 394, "relationships_index_url": "https://genius.com/Billie-eilish-and-khalid-lovely-sample", "release_date_components": { "year": 2018, "month": 4, "day": 19 }, "release_date_for_display": "April 19, 2018", "release_date_with_abbreviated_month_for_display": "Apr. 19, 2018", "song_art_image_thumbnail_url": "https://images.genius.com/86a0564f50ede2f0a4c71873484cf2c2.300x300x1.jpg", "song_art_image_url": "https://images.genius.com/86a0564f50ede2f0a4c71873484cf2c2.1000x1000x1.jpg", "title": "​lovely" } }, { "highlights": [], "index": "song", "type": "song", "result": { "_type": "song", "annotation_count": 10, "api_path": "/songs/2342329", "artist_names": "Justin Bieber", "header_image_url": "https://images.genius.com/ff429a6c7bf8e73717ad263f800f1cf7.1000x1000x1.jpg", "release_date_for_display": "November 13, 2015", "release_date_with_abbreviated_month_for_display": "Nov. 13, 2015", "song_art_image_thumbnail_url": "https://images.genius.com/c48eb30caab693c9a80f49610e2ddb24.300x300x1.png", "song_art_image_url": "https://images.genius.com/c48eb30caab693c9a80f49610e2ddb24.1000x1000x1.png", "stats": { "unreviewed_annotations": 0, "concurrents": 2, "hot": false, "pageviews": 4253225 }, "title": "Love Yourself", "title_with_featured": "Love Yourself", "updated_by_human_at": 1673826918, "url": "https://genius.com/Justin-bieber-love-yourself-lyrics", "featured_artists": [], "primary_artist": { "_type": "artist", "api_path": "/artists/357", "header_image_url": "https://images.genius.com/be2c60bdfb3ea6844a46cc5873c75b89.1000x563x1.jpg", "id": 357, "image_url": "https://images.genius.com/8c95afb142e16e2e053b4384514dc339.938x938x1.png", "index_character": "j", "is_meme_verified": false, "is_verified": true, "name": "Justin Bieber", "slug": "Justin-bieber", "url": "https://genius.com/artists/Justin-bieber", "iq": 1533 } } }, { "highlights": [], "index": "song", "type": "song", "result": { "_type": "song", "annotation_count": 5, "api_path": "/songs/3182605", "artist_names": "XXXTENTACION (Ft. Trippie Redd)", "full_title": "Fuck Love by XXXTENTACION (Ft. Trippie Redd)", "header_image_url": "https://images.genius.com/3909b41f2c27e688e4caec3637cdba36.1000x1000x1.png", "pyongs_count": 417, "relationships_index_url": "https://genius.com/Xxxtentacion-fuck-love-sample", "release_date_components": { "year": 2017, "month": 8, "day": 24 }, "release_date_for_display": "August 24, 2017", "release_date_with_abbreviated_month_for_display": "Aug. 24, 2017", "song_art_image_thumbnail_url": "https://images.genius.com/3909b41f2c27e688e4caec3637cdba36.300x300x1.png", "song_art_image_url": "https://images.genius.com/3909b41f2c27e688e4caec3637cdba36.1000x1000x1.png", "stats": { "unreviewed_annotations": 0, "hot": false, "pageviews": 3999138 }, "title": "Fuck Love", "title_with_featured": "Fuck Love (Ft. Trippie Redd)", "updated_by_human_at": 1678487420, "url": "https://genius.com/Xxxtentacion-fuck-love-lyrics", "featured_artists": [ { "_type": "artist", "api_path": "/artists/1086436", "header_image_url": "https://images.genius.com/cb8862d96235af8750677d64e92fee5a.1000x667x1.jpg", "id": 1086436, "image_url": "https://images.genius.com/1f0fcb626715f7bb0d47c9c2e01b7473.1000x1000x1.jpg", "index_character": "t", "is_meme_verified": false, "is_verified": true, "name": "Trippie Redd", "slug": "Trippie-redd", "url": "https://genius.com/artists/Trippie-redd", "iq": 7274 } ], "primary_artist": { "_type": "artist", "api_path": "/artists/396565", "header_image_url": "https://images.genius.com/83281176c66e39feea1b35f435388edb.1000x333x1.jpg", "id": 396565, "image_url": "https://images.genius.com/7337afb84752ce941b08f860be07a13d.548x548x1.jpg", "index_character": "x", "is_meme_verified": false, "is_verified": true, "name": "XXXTENTACION", "slug": "Xxxtentacion", "url": "https://genius.com/artists/Xxxtentacion", "iq": 364 } } } ] } ], "next_page": 2 } }`
  ); //response.json();

  console.log(jsonResponse);

  // Extract the songs from the response and map them to a new object with just their name and ID
  return jsonResponse.response.sections[0].hits.map((song) => (
    new Song(song.result.title, song.result.artist_names, song.result.song_art_image_url)
  ));
}

async function buttonTrigger(clickEvent) {
  console.log(clickEvent);

  const playlistTracklistElem = document.querySelector(".playlist>.tracklist");

  // Search for the parent with the class "song-results-option"
  let songElem = clickEvent.target.parentNode;
  while (songElem && songElem.className !== "song-results-option") {
    songElem = songElem.parentNode;
  }

  const addCase = songElem.querySelector(".song-add-btn");

  if (addCase) {
    const results = songElem.parentNode;
    results.removeChild(songElem);

    const svg = songElem.querySelector("svg");
    svg.parentNode.className = "song-remove-btn";
    svg.setAttribute("viewBox", "0 0 1024 1024");
    const path = svg.querySelector("g>path");
    path.setAttribute("d", "M512 1024C229.248 1024 0 794.752 0 512S229.248 0 512 0s512 229.248 512 512-229.248 512-512 512z m0-896C299.968 128 128 299.968 128 512s171.968 384 384 384 384-171.968 384-384S724.032 128 512 128z m192 448H320a64 64 0 1 1 0-128h384a64 64 0 0 1 64 64c0 35.392-28.608 64-64 64z");

    playlistTracklistElem.append(songElem);
  } else {
    playlistTracklistElem.removeChild(songElem);
  }

  // update the playlist cookie (take into account that it might not exist yet)
  const cookies = document.cookie.split(";");
  let playlist = null;
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.startsWith("playlist=")) {
      playlist = JSON.parse(cookie.split("=")[1]);
      break;
    }
  }

  console.log(cookies);
  console.log(playlist);

  if (!playlist) {
    playlist = { songs: [] };
  }

  const song = new Song(
    songElem.querySelector(".song-name").innerText,
    songElem.querySelector(".song-artists").innerText,
    songElem.querySelector(".song-image").src,
  );

  if (addCase) {
    playlist.songs.push(song);
  } else {
    playlist.songs = playlist.songs.filter((playlistSong) => playlistSong.title !== song.title && playlistSong.artists !== song.artists);
  }

  document.cookie = `playlist=${JSON.stringify(playlist)};max-age=86400`;

  console.log(document.cookie.split(";"));
  console.log(playlist);
}

document.addEventListener("DOMContentLoaded", () => {
  const cookies = document.cookie.split(";");
  let playlist = null;
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.startsWith("playlist=")) {
      playlist = JSON.parse(cookie.split("=")[1]);
      break;
    }
  }

  if (playlist) {
    const songs = playlist.songs;
    const uniqueSongs = [];
    console.log(songs);
    songs.forEach((song) => {
      if (!uniqueSongs.find((uniqueSong) => uniqueSong.title === song.title && uniqueSong.artists === song.artists)) {
        uniqueSongs.push(song);
      }
    });

    playlist.songs = uniqueSongs;
    console.log(playlist);

    const playlistTracklistElem = document.querySelector(".playlist>.tracklist");
    playlist.songs.forEach((song) => {
      const songObj = new Song(song.title, song.artists, song.coverart);
      const songElem = songObj.toHTML(false);
      console.log(songElem);
      songElem.querySelector(".song-remove-btn>svg").addEventListener("click", buttonTrigger);

      // check if the song is already in the playlist
      if (!playlistTracklistElem.querySelector(`[data-title="${song.title}"][data-artists="${song.artists}"]`)) {
        playlistTracklistElem.appendChild(songElem);
      }
    });

    console.log(playlist);
    document.cookie = `playlist=${JSON.stringify(playlist)};max-age=86400`;
  }

  const songInput = document.querySelector(".search-input");

  if (songInput) {
    songInput.addEventListener("input", async (event) => {
      let songsList = await getSongsList(event.target.value);
      console.log(songsList);
      songsList.sort((a, b) => {
        if (a.title < b.title) {
          return -1;
        }
        if (a.title > b.title) {
          return 1;
        }
        if (a.artists < b.artists) {
          return -1;
        }
        if (a.artists > b.artists) {
          return 1;
        }
        return 0;
      });
      const playlistTracklistElem = document.querySelector(".playlist>.tracklist");
      songsList = songsList.filter((song) => !playlistTracklistElem.querySelector(`[data-title="${song.title}"][data-artists="${song.artists}"]`));
      const resultsContainer = document.querySelector(".results");
      resultsContainer.innerHTML = "";
      songsList.forEach((song) => {
        const songElem = song.toHTML(true);
        resultsContainer.appendChild(songElem);
        songElem.querySelector(".song-results-option>.song-add-btn>svg").addEventListener("click", buttonTrigger);
      });
    });
  }
});