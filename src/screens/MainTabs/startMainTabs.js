import { Navigation} from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Feather';

const startTabs = () => {
  Promise.all([
    Icon.getImageSource("map-pin", 30),
    Icon.getImageSource("share-2", 30)
  ]).then(sources => {
    Navigation.startTabBasedApp({
      tabs: [{
          screen: "send-train.FindClimbScreen",
          label: "Find Climb",
          title: "Find CLimb",
          icon: sources[0]

        },
        {
          screen: "send-train.ShareClimbScreen",
          label: "Share Climb",
          title: "Share CLimb",
          icon: sources[1]
        }
      ]
    });
  })
};

export default startTabs