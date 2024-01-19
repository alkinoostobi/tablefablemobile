import io from 'socket.io-client';
import {Statstore} from "stores/stats";
import { DMStores } from 'src/stores/DMStores';
const socket = io('http://localhost:8080');

const stat = Statstore();
const dm = DMStores();
socket.on('connect', () => {
  if (socket.connected)
    console.log('Connected to server');
  else {
    console.log('NOT Connected to server');
  }
});
socket.emit('insertTokens', stat.tokens);
socket.emit('getScenes')
socket.on('getScenes', (scenes) => {
  dm.scenes = scenes.scenes;
} );
export default socket;
