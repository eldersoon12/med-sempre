import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: 300,
    borderBottomRightRadius: 45,
    overflow: "hidden",
  },
  linearGradient: {
    height: 300,
    borderBottomRightRadius: 45,
    position: "absolute",
  },
  imageLogo: {
    height: 330,
    width: "100%",
    position: "absolute",
    top: -30,
  },
  imageLogoSmall: {
    width: 161,
    height: 138,
    position: "absolute",
    top: 74,
  },
  containerLogo: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    zIndex: 1000,
  },
  containerForm: {
    height: "100%",
    backgroundColor: "red",
  },
});
