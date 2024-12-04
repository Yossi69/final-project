class Song {
    constructor(title, artists, coverart) {
        this.artists = artists;
        this.title = title;
        this.coverart = coverart;
    }

    toHTML(add) {
        const option = document.createElement("div");
        option.className = "song-results-option";
        option.setAttribute("data-title", this.title);
        option.setAttribute("data-artists", this.artists);
        const img = document.createElement("img");
        img.className = "song-image";
        img.src = this.coverart;
        option.appendChild(img);
        const container = document.createElement("div");
        container.className = "song-info";
        const title = document.createElement("div");
        title.className = "song-name";
        title.innerText = this.title;
        container.appendChild(title);
        const artists = document.createElement("div");
        artists.className = "song-artists";
        artists.innerText = this.artists;
        container.appendChild(artists);
        option.appendChild(container);
        // Save the svg inner html as a html element
        const addBtn = document.createElement("div");
        if (add) {
            addBtn.className = "song-add-btn";
            addBtn.innerHTML = `<?xml version="1.0" encoding="iso-8859-1"?>
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
               width="510px" height="510px" viewBox="0 0 510 510" style="enable-background:new 0 0 510 510;" xml:space="preserve">
              <g id="add-circle-outline">
                <path d="M280.5,127.5h-51v102h-102v51h102v102h51v-102h102v-51h-102V127.5z M255,0C114.75,0,0,114.75,0,255s114.75,255,255,255
                  s255-114.75,255-255S395.25,0,255,0z M255,459c-112.2,0-204-91.8-204-204S142.8,51,255,51s204,91.8,204,204S367.2,459,255,459z"/>
              </g>
            </svg>`;
        } else {
            addBtn.className = "song-remove-btn";
            addBtn.innerHTML = `<?xml version="1.0" encoding="iso-8859-1"?>
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
               width="510px" height="510px" viewBox="0 0 1024 1024" style="enable-background:new 0 0 510 510;" xml:space="preserve">
              <g id="add-circle-outline">
                <path d="M512 1024C229.248 1024 0 794.752 0 512S229.248 0 512 0s512 229.248 512 512-229.248 512-512 512z m0-896C299.968 128 128 299.968 128 512s171.968 384 384 384 384-171.968 384-384S724.032 128 512 128z m192 448H320a64 64 0 1 1 0-128h384a64 64 0 0 1 64 64c0 35.392-28.608 64-64 64z"/>
              </g>
            </svg>`;
        }
        option.appendChild(addBtn);

        return option;
    }
}
class Playlist {
    constructor(songs) {
        this.songs = songs;
    }
}

class User {
    constructor(firstName, lastName, email, password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }
}

module.exports = { Song, Playlist, User };