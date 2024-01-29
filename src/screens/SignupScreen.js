import React from 'react'
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import { Input, Text, Button } from 'react-native-elements'
import { SafeAreaView } from 'react-navigation'

const SignupScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ paddingHorizontal: 24, paddingTop: 100 }}>
        <Text h3 style={styles.header}>
          Sign up for tracker
        </Text>
        <View>
          <Input label="Email" />
          <Input label="Password" />
          <Button title="Sign Up" />
        </View>
        <View style={styles.login}>
          <Text>Already have an account? </Text>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => navigation.navigate('SignIn')}
          >
            <Text style={styles.signIn}>Sign in instead</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    textAlign: 'center',
    marginBottom: 50,
  },
  login: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },

  signIn: {
    color: 'blue',
  },
})
export default SignupScreen
