# RNStarterKit
RNStarterKit is a application starter kit that will help you initialize your next React Native project. It takes care of all the boilerplate code that you hate writing over and over again so you can focus more on your design and your business logic.

### How does it work?
RNStarterKit leverages the power of React Navigation, Formik, Yup, UI Kitten and many libraries of that kind to get your initial application setup ready for you. 
It includes a minimal authentication flow with room to implement your own on top of it.
This starter kit is very opionionated as I have made a decision to use UI Kitten as the primary UI Library for the project. However, feel free to add your own taste on what you will be doing.

### Installation
Just clone the repository and run `yarn .` or `npm install` inside the cloned directory.
If you are developing for ios, do a quick `pod install` inside the ios directory.
That's it. Now you can run the dev server and see the results.

### Directory Structure
Since the project uses typescript, I have configured relative path names for the files.
In order for your custom component to be able to be used using `import {YourCustomComponent} from '@app/components'`, your component must be exported by the `src/components/index.ts` file.
Similarly, for screens, navigators and rest of the directories inside src, you can configure relative paths in a similar fashion.
The directories are for following usages:
- `api` directory is there so you can write any functions that need to communicate with the api.
- `components` directory is purely for storing your custom react components. Nothing more.
- `constants` directory describes itself;
- `hooks` is for custom react hooks.
- `navigations` store all your navigators.
- `screens` store all your pages that will be used by the navigators.
- `storage` hosts the functions for communicating with AsyncStorage
- `types` is the shared library for the custom typescript type definitions used throughout the project.

