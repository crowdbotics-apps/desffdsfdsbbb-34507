import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_2_9044}>
        <View style={styles.View_2_9045}>
          <Text style={styles.Text_2_9045}>
            The design has been designed with fully auto layout, so it is very
            adaptive if you want to delete or add some parts. If you are not
            familiar with auto layout, you can turn it off by right-clicking the
            layer, and selecting remove auto layout. Almost all designs, color
            schemes, typography, components, and design system have been
            detached and flattened. If you need the full version for commercial
            purposes, please support me by visiting the page on the link below.
            Thank You ...
          </Text>
        </View>
        <View style={styles.View_2_9046}>
          <View style={styles.View_2_9047}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a862/51cd/b4b8d3f8237a77a39ea99412ca3043f8"
              }}
              style={styles.ImageBackground_2_9048}
            />
            <View style={styles.View_2_9049}>
              <Text style={styles.Text_2_9049}>UI8</Text>
            </View>
          </View>
          <View style={styles.View_2_9050}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3a76/5ff0/060c6419a9d3ed571689c9814b6ea367"
              }}
              style={styles.ImageBackground_2_9051}
            />
            <View style={styles.View_2_9052}>
              <Text style={styles.Text_2_9052}>Gumroad</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_2_9054}>
          <Text style={styles.Text_2_9054}>
            https://ui8.net/munirsr/products/aman-vpn-app-ui-kit
            https://munirsr.gumroad.com/l/AmanVPNAppUIKit
          </Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(246, 248, 252, 1)" },
  View_2: { height: hp("139%") },
  View_2_9044: {
    width: wp("73%"),
    height: hp("100%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("20%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2_9045: {
    width: wp("73%"),
    minWidth: wp("73%"),
    minHeight: hp("59%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_2_9045: {
    color: "rgba(0, 24, 159, 1)",
    fontSize: 26,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.15000000596046448,
    textTransform: "none"
  },
  View_2_9046: {
    width: wp("73%"),
    minWidth: wp("73%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("64%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2_9047: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_2_9048: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_2_9049: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("4%"),
    justifyContent: "center"
  },
  Text_2_9049: {
    color: "rgba(48, 79, 254, 1)",
    fontSize: 26,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.15000000596046448,
    textTransform: "none"
  },
  View_2_9050: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_2_9051: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_2_9052: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("4%"),
    justifyContent: "center"
  },
  Text_2_9052: {
    color: "rgba(48, 79, 254, 1)",
    fontSize: 26,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.15000000596046448,
    textTransform: "none"
  },
  View_2_9054: {
    width: wp("73%"),
    minWidth: wp("73%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("84%"),
    justifyContent: "center"
  },
  Text_2_9054: {
    color: "rgba(48, 79, 254, 1)",
    fontSize: 26,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.15000000596046448,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
