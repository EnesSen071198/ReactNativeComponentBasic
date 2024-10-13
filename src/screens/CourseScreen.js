import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

export default function CourseScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 30, paddingBottom: 20 }}>Course Screen</Text>
      <View style={styles.buttonContainer}>
        <Button
          title='Go to Course Home Screen'
          onPress={() => navigation.navigate("Home")}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title='Go to Course About Screen'
          onPress={() => navigation.navigate("About")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    marginVertical: 10, // Butonlar arasındaki dikey boşluk
    width: "80%", // Butonun genişliği
    borderRadius: 10, // Butonun köşe yuvarlama
    overflow: "hidden" // Köşeleri yuvarlamak için
  },
  button: {
    fontSize: 30,
    paddingVertical: 10 // Buton içindeki dikey boşluk
  }
});
