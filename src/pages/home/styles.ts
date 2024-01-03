import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  linearGradient: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 16,
  },
  text: {
    fontFamily: "Inter",
    fontSize: 48,
  },
  image: {
    left: -570,
    width: 1200,
  },
  imageLogo: {
    marginTop: 76,
    width: 161,
    height: 138,
  },
  titleWelcome: {
    color: "#fff",
    fontSize: 32,
    fontFamily: "Inter-semibold",
  },
  welcomeDescription: {
    color: "#fff",
    fontSize: 18,
    fontFamily: "Inter",
  },
  boxContent: {
    position: "absolute",
    bottom: 64,
    display: "flex",
    flexDirection: "column",
    gap: 24,
  },
});
