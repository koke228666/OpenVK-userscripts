// ==UserScript==
// @name        Smithereen AJAX Player
// @namespace   Violentmonkey Scripts
// @match       *://friends.grishka.me/*
// @grant       none
// @version     1.0
// @author      koke228
// @description Floating audio controls
// ==/UserScript==

(function() {
document.body.insertAdjacentHTML('beforeend',
`<div class="sillyPlayer" style="display: none;">
	<div class="wrap">
		<div class="playBtn stop">
		  <a class="playImg"></a>
		</div>
		<div class="trackInfo">
		  <div class="trackPerformer">${AudioPlayer.getInstance().lastSong?.artist || ""}</div>
		  <div class="trackName">${AudioPlayer.getInstance().lastSong?.title || ""}</div>
		</div>
	</div>
</div>`)
  const cWrapRect = document.querySelector('.contentWrap').getBoundingClientRect();
  const sPlayerRect = document.querySelector('.sillyPlayer').getBoundingClientRect();
  document.head.insertAdjacentHTML('beforeend',
  `<style class="spStyle">
    .sillyPlayer {
        right: ${window.innerWidth - cWrapRect.right - 19 - sPlayerRect.width}px;
  </style>`)
})()

document.querySelector('.sillyPlayer .playBtn .playImg').onclick = function() {
	AudioPlayer.playOrPause(AudioPlayer.getInstance().lastSong.id);
}
document.querySelector('.sillyPlayer .trackInfo').onclick = function() {
	AudioPlayer.playOrPause(AudioPlayer.getInstance().lastSong.id);
}

function checkVisibility(el) {
  const rect = el.getBoundingClientRect();
  return rect.top < innerHeight && rect.bottom > 0;
}

AudioPlayer.updateAjaxPos = function() {
  const header = document.querySelector('.headerWrap');
  const headerRect = header.getBoundingClientRect();
  const cWrapRect = document.querySelector('.contentWrap').getBoundingClientRect();
  const sPlayerRect = document.querySelector('.sillyPlayer').getBoundingClientRect();
  document.querySelector('.spStyle').innerHTML = `
  .sillyPlayer {
      right: ${window.innerWidth - cWrapRect.right - 19 - sPlayerRect.width}px;
      top: ${checkVisibility(header) ? headerRect.height + 9 : 20}px;
  }`
}

addEventListener("resize", () => {
  AudioPlayer.updateAjaxPos();
});
addEventListener("scroll", () => {
  AudioPlayer.updateAjaxPos();
});

var AudioElementIDs
;(function(AudioElementIDs) {
  AudioElementIDs["PLAYER"] = "audioPlayer"
  AudioElementIDs["TIP_WRAP"] = "audioTipWrap"
  AudioElementIDs["TIP"] = "audioTip"
  AudioElementIDs["TIP_ARROW"] = "audioTipArrow"
})(AudioElementIDs || (AudioElementIDs = {}))

var AudioPlayerState
;(function(AudioPlayerState) {
  AudioPlayerState["PLAY"] = "play"
  AudioPlayerState["PAUSE"] = "pause"
  AudioPlayerState["STOP"] = "stop"
  AudioPlayerState["LOAD"] = "load"
})(AudioPlayerState || (AudioPlayerState = {}))


var AudioElementIDs
;(function(AudioElementIDs) {
  AudioElementIDs["PLAYER"] = "audioPlayer"
  AudioElementIDs["TIP_WRAP"] = "audioTipWrap"
  AudioElementIDs["TIP"] = "audioTip"
  AudioElementIDs["TIP_ARROW"] = "audioTipArrow"
})(AudioElementIDs || (AudioElementIDs = {}))

var AudioPlayerState
;(function(AudioPlayerState) {
  AudioPlayerState["PLAY"] = "play"
  AudioPlayerState["PAUSE"] = "pause"
  AudioPlayerState["STOP"] = "stop"
  AudioPlayerState["LOAD"] = "load"
})(AudioPlayerState || (AudioPlayerState = {}))

AudioPlayer.refreshAjaxData = function() {
	const sillyPerformer = document.querySelector('.sillyPlayer .trackPerformer');
	const sillyName = document.querySelector('.sillyPlayer .trackName');
  sillyPerformer.innerHTML = AudioPlayer.getInstance().lastSong?.artist || "";
  sillyName.innerHTML = AudioPlayer.getInstance().lastSong?.title || "";
  AudioPlayer.updateAjaxPos();
}

AudioPlayer.stop = function() {
  const apinst = AudioPlayer.instance;
  const sillybtn = document.querySelector('.sillyPlayer .playBtn');
  const id = apinst.curAudioID
  if (!id) return
  if (apinst.mgr && !apinst.mgr.paused()) apinst.mgr.stopAudio()
  apinst.state = AudioPlayerState.STOP
  sillybtn.classList.remove('playing');
  apinst.forEachControl(apinst.setGraphics.bind(this))
  apinst.setAudioID(null)
  apinst.controlsForCurrentAudio = []
}

AudioPlayer.playOrPause = function(id) {
	const apinst = AudioPlayer.instance;
	const sillybtn = document.querySelector('.sillyPlayer .playBtn');
	const sillyPlayer = document.querySelector('.sillyPlayer');
    if (apinst.cancelClick) {
      apinst.cancelClick = false
      return
    }
    if (!apinst.mgr || !ge(AudioElementIDs.PLAYER)) {
      apinst.initPlayer(id)
			sillybtn.classList.add('playing');
      sillyPlayer.style = "";
      AudioPlayer.refreshAjaxData();
      return
    }
    const curAudioID = apinst.curAudioID
    if (id == curAudioID) {
      if (apinst.mgr.paused()) {
        // TODO: If a video is playing, actually pause the video.
        if (apinst.pausedByVideo) apinst.pausedByVideo = null
        if (apinst.time != undefined) {
          try {
            apinst.mgr.playAudio(apinst.time)
            apinst.time = null
          } catch (e) {}
        } else {
          apinst.mgr.playAudio(apinst.time)
        }
        apinst.state = AudioPlayerState.PLAY
				sillybtn.classList.add('playing');
        sillyPlayer.style = "";
        AudioPlayer.refreshAjaxData();
      } else {
        apinst.mgr.pauseAudio()
        apinst.state = AudioPlayerState.PAUSE
				sillybtn.classList.remove('playing');
        AudioPlayer.refreshAjaxData();
      }
    } else {
      // TODO: If a video is playing, actually pause the video.
      if (apinst.pausedByVideo) apinst.pausedByVideo = null
      if (curAudioID) apinst.stop()
	    sillybtn.classList.remove('playing');
      AudioPlayer.refreshAjaxData();
      apinst.setAudioID(id)
      if (!apinst.lastSong) apinst.setSongInfo()
      if (!apinst.lastSong) return
      const lastSong = apinst.lastSong
      if (lastSong.unavailabilityReason) {
        apinst.setAudioID(null)
        apinst.showAudioUnavailableMessage(lastSong)
        return
      }
      try {
        apinst.mgr.loadAudio(lastSong.url, ge(AudioElementIDs.PLAYER))
        sillybtn.classList.add('playing');
        sillyPlayer.style = "";
        AudioPlayer.refreshAjaxData();
      } catch (e) {}
			sillybtn.classList.add('playing');
      sillyPlayer.style = "";
      AudioPlayer.refreshAjaxData();
      apinst.state = AudioPlayerState.LOAD
    }
    apinst.forEachControl(apinst.setGraphics.bind(apinst))
  }
