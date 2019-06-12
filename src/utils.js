import Bibi1 from './resources/bibiImages/bibi1.png'
import Bibi2 from './resources/bibiImages/bibi2.png'
import Bibi3 from './resources/bibiImages/bibi3.png'
import Bibi4 from './resources/bibiImages/bibi4.png'
import Bibi5 from './resources/bibiImages/bibi5.png'
import Bibi6 from './resources/bibiImages/bibi6.png'
import Bibi7 from './resources/bibiImages/bibi7.png'

// eslint-disable-next-line import/prefer-default-export
export const selectImage = (date) => {
  const number = (date.getTime()*Math.floor(Math.random()*1000))%7

  if (number === 0) {
    return Bibi1
  } if (number === 1) {
    return Bibi2
  } if (number === 2) {
    return Bibi3
  } if (number === 3) {
    return Bibi4
  } if (number === 4) {
    return Bibi5
  } if (number === 5) {
    return Bibi6
  }
  return Bibi7
}