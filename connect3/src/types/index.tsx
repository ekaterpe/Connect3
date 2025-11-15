export type Screen =
  | "home"
  | "family"
  | "events"
  | "reminders"
  | "feed"
  | "diary"
  | "profile"
  | "settings";

export type AppMode = "standard" | "voice";

export type AuthScreen = "login" | "signup";

export interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}

export interface ApiRequest {
  (endpoint: string, options?: RequestInit): Promise<any>;
}

export interface ScreenProps {
  onMenuClick: () => void;
  onTextSizeToggle: () => void;
  textSizeMultiplier: number;
  user?: User | null;
  onApiRequest: ApiRequest;
  onNavigate?: (screen: Screen) => void;
}

export interface LoginScreenProps {
  onLogin: (email: string, password: string) => void;
  onSignUp: () => void;
}

export interface SignUpScreenProps {
  onSignUp: (userData: any) => void;
  onBackToLogin: () => void;
}