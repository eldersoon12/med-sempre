import { TouchableOpacity, StyleSheet, Text } from "react-native";
import { useTheme } from "react-native-paper";

interface PButton {
  onPress: () => void;
  title: string;
  color?: string;
}

const styles = StyleSheet.create({
  buttonContainer: {
    elevation: 0,
    borderRadius: 8,
    padding: 16,
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
  },
});

export const Button = ({ onPress, title, color }: PButton) => {
  const { colors } = useTheme();

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.buttonContainer,
        {
          backgroundColor: color ? color : colors.primary,
        },
      ]}
      activeOpacity={0.8}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};
