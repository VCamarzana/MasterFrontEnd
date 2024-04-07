export interface Member {
  id: string;
  login: string;
  avatar_url: string;
}

export interface Image {
  id: number;
  src: string;
  title: string;
}

export interface DisplayedImg {
  id: number;
  src: string;
  title: string;
  height: number;
}

export interface AuthStatus {
  isAuthenticated: boolean;
  username?: string;
}
