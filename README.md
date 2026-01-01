This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

> **Note**: Make sure you have completed the [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) guide before proceeding.

## Step 1: Start Metro

First, you will need to run **Metro**, the JavaScript build tool for React Native.

To start the Metro dev server, run the following command from the root of your React Native project:

```sh
# Using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Build and run your app

With Metro running, open a new terminal window/pane from the root of your React Native project, and use one of the following commands to build and run your Android or iOS app:

### Android

```sh
# Using npm
npm run android

# OR using Yarn
yarn android
```

### iOS

For iOS, remember to install CocoaPods dependencies (this only needs to be run on first clone or after updating native deps).

The first time you create a new project, run the Ruby bundler to install CocoaPods itself:

```sh
bundle install
```

Then, and every time you update your native dependencies, run:

```sh
bundle exec pod install
```

For more information, please visit [CocoaPods Getting Started guide](https://guides.cocoapods.org/using/getting-started.html).

```sh
# Using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up correctly, you should see your new app running in the Android Emulator, iOS Simulator, or your connected device.

This is one way to run your app — you can also build it directly from Android Studio or Xcode.

### Code Logic Preview, for details please check at Code, or contact me directly, even better hire me

import { useAuth } from '../context/AuthContext';
const { user, logout } = useAuth();  #Get data from ReactContext from Authcontext and display 

 <Text style={styles.subtitle}>Name:{user?.username}</Text>
            <Text style={styles.subtitle}>Password:{user?.password}</Text>
            <Text style={styles.subtitle}>Email:{user?.email}</Text>

 Login Screen Logic  import { useAuth } from '../context/AuthContext';

#Call loginscreen function at AuthContext  const result = await login(username, password);  Sign Up Screen Logic  #After insert all the field, call signup function to store all the data const result = await signup(username, password, email);

 


# Learn More
Screen Shot And Video

<img width="441" height="804" alt="Login Screen 2" src="https://github.com/user-attachments/assets/832bddc8-1da5-449e-a3c6-c0b38b6f5978" />

<img width="373" height="819" alt="Create Accounta" src="https://github.com/user-attachments/assets/1a15fe48-cb9f-4114-9db2-40ff2ec1f5eb" />

<img width="451" height="835" alt="Home Screen" src="https://github.com/user-attachments/assets/a9e1abfd-c59e-4d20-bac2-bde2b022f778" />





