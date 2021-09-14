import firebase from "firebase/app";
import 'firebase/firestore';

const firestore = firebase.firestore();

firestore.collection('users').doc('nHhRNEssSrTaUlXX4P2a').collection('cartItem').doc('UJUQy2TVEMjgDdp87QZN');
firestore.doc('/users/nHhRNEssSrTaUlXX4P2a/cartItem/UJUQy2TVEMjgDdp87QZN');
firestore.collection('/users/UJUQy2TVEMjgDdp87QZN/cartItem');