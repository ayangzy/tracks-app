import React from 'react'
import {
  StyleSheet,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native'
import { Input, Text, Button } from 'react-native-elements'

const SigninScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ paddingHorizontal: 24, paddingTop: 100 }}>
        <Text h3 style={styles.header}>
          Sign in tracker
        </Text>
        <View>
          <Input label="Email" />
          <Input label="Password" />
          <Button title="Sign In" />
        </View>
        <View style={styles.login}>
          <Text>Don't have an account? </Text>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => navigation.navigate('SignUp')}
          >
            <Text style={styles.goBack}>Go back to Sign up</Text>
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

  goBack: {
    color: 'blue',
  },
})
export default SigninScreen
