import insideOne from '../images/1.jpg'
import insideTwo from '../images/2.jpg'
import insideThree from '../images/3.jpg'
const Scene = {
    insideOne: {
        title: 'Entrada',
        image: insideOne,
        pitch: -15.5,
        yaw: -59.8,
        // puntos de la escena 1
        hotSpots:{
            nextScene:{
                type: 'custom',
                pitch: -1.93,
                yaw: -14.53,
                cssClass: 'moveScene',
                scene: 'insideTwo'
            }
        }
    },
    insideTwo:{
        title: 'Living - Comedor',
        image: insideTwo,
        pitch: 2,
        yaw: 190,
        hotSpots:{
            nextScene:{
                type: 'custom',
                pitch:-5,
                yaw: -111,
                cssClass: 'moveScene',
                scene: 'insideOne'
            },
            otherScene:{
                type: 'custom',
                pitch: -2.80,
                yaw: 93.37,
                cssClass: 'otherScene',
                scene: 'insideThree'
            }
        } 
    },
    insideThree:{
        title: 'Quincho',
        image: insideThree,
        pitch: 2,
        yaw: 190,
        hotSpots:{
            Scene3:{
                type: 'custom',
                pitch: -5,
                yaw: 38.50,
                cssClass: 'moveScene',
                scene: 'insideTwo'
            }
        }
    }
};

export default Scene;