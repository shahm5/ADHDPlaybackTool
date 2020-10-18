import React, { useState } from "react";
import { NavBar } from "./NavBar";
import { Pause } from "./Pause";
import { ProgressBar } from "./ProgressBar";
import "./styles/Video.css";

// export const Video = () => {
//   const [url, setUrl] = useState("");
//   const [urlInput, setInput] = useState("");
//   const pauseInterval = 5;

//   const updateInput = (e) => {
//     setInput(e.target.value);
//   };
//   const getVideo = () => {
//     let urlBuilder =
//       urlInput.substring(0, 24) + "embed/" + urlInput.substr(24 + 8);
//     setUrl(urlBuilder);
//   };

// var player;
//   //   const onYoutubeIframeAPIReady = () => {
//   //     player = new YT.Player()
//   //   }

//   return (
//     <div className="videoComp">
//       <YouTubeVideo />
//       <input onChange={updateInput} value={urlInput} />
//       <button onClick={getVideo}>Get my video!</button>
//       {url === "" ? (
//         <div />
//       ) : (
//         <div>
//           <iframe
//             width="900"
//             height="506"
//             id="videoPlayer"
//             src={url}
//             frameborder="0"
//             allowfullscreen
//             className="video"
//           ></iframe>
//         </div>
//       )}
//     </div>
//   );
// };

class Video extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "",
      urlInput: "",
      pauseInterval: 15000,
      player: null,
      show: false,
      bar:  false,
      index: -1,
    };
  }

  //   componentDidMount = () => {
  //     // On mount, check to see if the API script is already loaded
  //     if (!window.YT) {
  //       console.log("manual");
  //       // If not, load the script asynchronously
  //       const tag = document.createElement("script");
  //       tag.src = "https://www.youtube.com/iframe_api";

  //       // onYouTubeIframeAPIReady will load the video after the script is loaded
  //       window.onYouTubeIframeAPIReady = this.loadVideo;

  //       const firstScriptTag = document.getElementsByTagName("script")[0];
  //       firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  //     } else {
  //       // If script is already there, load the video directly
  //       console.log("already loaded");
  //       this.loadVideo();
  //     }
  //   };

  loadVideo = () => {
    // the Player object is created uniquely based on the id in props
    // let x = new String(id);
    console.log("player created");
    this.setState({bar: true});
    let play = new window.YT.Player("ytplayer", {
      events: {
        // 'onReady': this.onPlayerReady
        onReady: () => console.log("firing onReady"),
      },
    });
    this.setState({ player: play });
    setInterval(() => {
      this.showModal();
      this.setState({index: this.state.index + 1});
    }, this.state.pauseInterval);
  };

  updateInput = (e) => {
    this.setState({ urlInput: e.target.value });
  };

  getVideo = () => {
    let urlBuilder =
      this.state.urlInput.substring(0, 24) +
      "embed/" +
      this.state.urlInput.substr(24 + 8) +
      "?enablejsapi=1&origin=http://localhost:3000/video";
    this.setState({ url: urlBuilder });
    const id = this.state.urlInput.substring(32);

    if (!window.YT) {
      console.log("manually loading");
      // If not, load the script asynchronously
      const tag = document.createElement("script");
      tag.id = "iframe-demo";
      tag.src = "https://www.youtube.com/iframe_api";

      // onYouTubeIframeAPIReady will load the video after the script is loaded
      window.onYouTubeIframeAPIReady = () => {
        this.loadVideo();
        console.log("loading vid");
      };

      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    } else {
      // If script is already there, load the video directly
      this.loadVideo(id);
      console.log("already loaded");
    }
  };

  onPlayerReady = (event) => {
    console.log("ready");
    event.target.playVideo();
  };

  // 5. The API calls this function when the player's state changes.
  //    The function indicates that when playing a video (state=1),
  //    the player should play for six seconds and then stop.
  //   onPlayerStateChange = (event) => {
  //     if (event.data === window.YT.PlayerState.PLAYING) {
  //       // TODO: add pause code
  //     }
  //   };

  //   pause = () => {
  //     this.state.player.pauseVideo();
  //   };

  hideModal = () => {
    this.setState({ show: false });
  };

  showModal = () => {
    this.setState({ show: true });
  };

  render = () => {
    return (
      <div>
        <NavBar />
        <div className="videoComp">
          <input onChange={this.updateInput} value={this.state.urlInput} />
          <button style={{margin: 4}} onClick={this.getVideo}>Get my video!</button>
          {/* <button onClick={this.pause}>PAUSE</button> */}
          <ProgressBar active={this.state.bar}/>
          {!this.state.show ? (
            <div />
          ) : (
            <div id="myModal" className="modal-display">
              <div class="modal-content">
                <button onClick={this.hideModal}>X</button>
                <Pause index={this.state.index}/>
              </div>
            </div>
          )}
          {this.state.url === "" ? (
            <div />
          ) : (
            <div>
              <iframe
                width="900"
                height="506"
                id="ytplayer"
                src={this.state.url}
                frameBorder="0"
                allowFullScreen
                className="video"
              ></iframe>
              {/* <div id="ytplayer"></div> */}
            </div>
          )}
        </div>
      </div>
    );
  };
}

export default Video;
