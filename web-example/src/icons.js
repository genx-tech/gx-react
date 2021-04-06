/* eslint-disable camelcase */
import FontAwesome_ttf from 'react-native-vector-icons/Fonts/FontAwesome.ttf';
import Entypo_ttf from 'react-native-vector-icons/Fonts/Entypo.ttf';
import MaterialCommunityIcons_ttf from 'react-native-vector-icons/Fonts/MaterialCommunityIcons.ttf';
import Octicons_ttf from 'react-native-vector-icons/Fonts/Octicons.ttf';
import SimpleLineIcons_ttf from 'react-native-vector-icons/Fonts/SimpleLineIcons.ttf';
import Ionicons_ttf from 'react-native-vector-icons/Fonts/Ionicons.ttf';
import MaterialIcons_ttf from 'react-native-vector-icons/Fonts/MaterialIcons.ttf';
import AntDesign_ttf from 'react-native-vector-icons/Fonts/AntDesign.ttf';
import Feather_ttf from 'react-native-vector-icons/Fonts/Feather.ttf';
import EvilIcons_ttf from 'react-native-vector-icons/Fonts/EvilIcons.ttf';

const IconsCSS = `
@font-face {
  src: url(${FontAwesome_ttf});
  font-family: FontAwesome;
}
@font-face {
  src: url(${Entypo_ttf});
  font-family: Entypo;
}
@font-face {
  src: url(${MaterialCommunityIcons_ttf});
  font-family: MaterialCommunityIcons;
}
@font-face {
  src: url(${Octicons_ttf});
  font-family: Octicons;
}
@font-face {
  src: url(${SimpleLineIcons_ttf});
  font-family: SimpleLineIcons;
}
@font-face {
  src: url(${Ionicons_ttf});
  font-family: Ionicons;
}
@font-face {
  src: url(${MaterialIcons_ttf});
  font-family: MaterialIcons;
}
@font-face {
  src: url(${AntDesign_ttf});
  font-family: AntDesign;
}
@font-face {
  src: url(${Feather_ttf});
  font-family: Feather;
}
@font-face {
  src: url(${EvilIcons_ttf});
  font-family: EvilIcons;
}
`;
if (typeof window !== `undefined`) {
    const style = document.createElement('style');
    style.type = 'text/css';
    if (style.styleSheet) style.styleSheet.cssText = IconsCSS;
    else style.appendChild(document.createTextNode(IconsCSS));

    document.head.appendChild(style);
}
