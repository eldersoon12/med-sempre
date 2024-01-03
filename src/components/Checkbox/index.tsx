import { View, Text } from "react-native";
import { Checkbox as Check } from "react-native-paper";
import React, { useState } from "react";

interface PCheck {
  disabled?: boolean;
  color?: string;
  label?: string;
}

export default function CheckBox({
  disabled = false,
  color = "#2196F3",
  label = "",
}: PCheck) {
  const [checked, setChecked] = useState(false);

  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        gap: 8,
        width: "100%",
        alignItems: "center",
      }}
    >
      <Check
        status={checked ? "checked" : "unchecked"}
        disabled={disabled}
        color={color}
        onPress={() => {
          setChecked(!checked);
        }}
      />
      <Text
        style={{
          fontFamily: "Inter",
          fontSize: 16,
          fontWeight: "400",
        }}
      >
        {label && label}
      </Text>
    </View>
  );
}
