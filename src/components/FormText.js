import { StyleSheet, Text, View, TextInput, Platform } from "react-native";
import React from "react";
import { mainColor, textColor } from "../../Constants";
import Feather from "react-native-vector-icons/Feather";
import * as Animatable from "react-native-animatable";

const FormText = (props) => {
  return (
    <View>
      <Text style={{ fontSize: 16, paddingTop: 35, color: textColor }}>
        {props.label}
      </Text>
      <View
        style={{
          flexDirection: "row",
          marginTop: 10,
          borderBottomColor: "#f2f2f2",
          borderBottomWidth: 1,
          paddingBottom: 5,
        }}
      >
        <Feather name={props.icon} size={20} color={textColor} />

        <TextInput
          {...props}
          placeholder={props.placeholder}
          style={{
            paddingLeft: 10,
            color: textColor,
            flex: 1,
            marginTop: Platform.OS == "ios" ? 0 : -3,
            ...props.style,
          }}
        />

        {props.errorShow === false && (
          <Animatable.View animation="bounceIn" duration={500}>
            <Feather name="check-circle" size={15} color={mainColor} />
          </Animatable.View>
        )}
      </View>

      {props.errorShow && (
        <Animatable.Text
          animation="fadeInLeft"
          duration={500}
          style={{ color: "#E83350", fontSize: 12, marginTop: 5 }}
        >
          {props.errorText}
        </Animatable.Text>
      )}
    </View>
  );
};

export default FormText;

const styles = StyleSheet.create({});
