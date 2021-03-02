'use strict';

const mediaStreamConstraints = {
  video: true,
};

const localVideo = document.querySelector('video');

let localStream;

function gotoLocalMediaStream(mediaStream) {
  localStream = mediaStream;
  localVideo.srcObject = mediaStream;
}

function handleLocalMediaStramError(error) {
  console.log('navigator.getUserMedia error : ', error);
}

navigator.mediaDevices
  .getUserMedia(mediaStreamConstraints)
  .then(gotoLocalMediaStream)
  .catch(handleLocalMediaStramError);
