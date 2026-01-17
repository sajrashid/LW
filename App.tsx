import AppRouter from './navigation/AppRouter.tsx'
import { LocationProvider } from "./context/LocationProvider.tsx";
import { UserProvider } from "./context/UserProvider.tsx";

export default function App() {
  return (
    <UserProvider>
      <LocationProvider>
        <AppRouter />
      </LocationProvider>
    </UserProvider>
  );
}
