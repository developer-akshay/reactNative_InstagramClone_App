//we are importing properties for fontweight so that it will know the type of fontWeight 
import { TextStyle } from "react-native/Libraries/StyleSheet/StyleSheetTypes";

const size = {

    xs: 10,
    sm: 12,
    default: 14,
    md: 16,
    lg: 20,
    xlg: 24,
    xxlg: 30,

}

//we are defining the type of weight here after importing the textstyle
// const weight: = {
//     full: '900',
//     semi: '600',
//     bold: 'bold',
//     normal: 'normal',
//     thin: '400'
// }
const weight:{[key: string]: TextStyle["fontWeight"]} = {
    full: '900',
    semi: '600',
    bold: 'bold',
    normal: 'normal',
    thin: '400'
}

export default {size,weight};