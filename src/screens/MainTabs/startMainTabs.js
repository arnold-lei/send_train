import { Navigation} from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Feather';

const startTabs = () => {
  Promise.all([
    Icon.getImageSource("list", 30),
    Icon.getImageSource("plus-circle", 30), 
    Icon.getImageSource("menu", 30)
  ]).then(sources => {
    Navigation.startTabBasedApp({
      tabs: [{
          screen: "send-train.MyClimbsScreen",
          label: "My Climbs",
          title: "My Climbs",
          icon: sources[0],
          navigatorButtons:{
            leftButtons:[{
              icon: sources[2],
              title: "Menu",
              id: "sideDrawerToggle"
            }] 
          }
        },
        {
          screen: "send-train.AddClimbScreen",
          label: "Add Climb",
          title: "Add CLimb",
          icon: sources[1],
          navigatorButtons: {
            leftButtons: [{
              icon: sources[2],
              title: "Menu",
              id: "sideDrawerToggle"
            }]
          }
        }
      ],
      tabsStyles:{
        tabBarSelectedButtonColor: '#3F5DCB'
      },
      drawer:{
        left:{
          screen: 'send-train.SideDrawerScreen'
        }
      },
      appStyle:{
        tabBarSelectedButtonColor: '#3F5DCB'
      }
    });
  })
};

export default startTabs